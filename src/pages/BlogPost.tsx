import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Eye, MessageCircle, Heart, ArrowLeft, Tag, FileText, TrendingUp, Zap, ShoppingCart, BarChart3, Users, Settings, Target } from "lucide-react";
import { blogPosts, BlogPost as BlogPostType } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [views, setViews] = useState(0);
  const [commentName, setCommentName] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === id);
    if (foundPost) {
      setPost(foundPost);
      
      // Load view count from localStorage
      const viewKey = `blog_views_${id}`;
      const hasViewed = localStorage.getItem(viewKey);
      
      if (!hasViewed) {
        // Increment view count (simulated - in real app, this would be API call)
        const newViews = foundPost.views + 1;
        setViews(newViews);
        localStorage.setItem(viewKey, "true");
        // Store updated view count
        localStorage.setItem(`blog_views_count_${id}`, newViews.toString());
      } else {
        // Load stored view count
        const storedViews = localStorage.getItem(`blog_views_count_${id}`);
        setViews(storedViews ? parseInt(storedViews) : foundPost.views);
      }
    }
  }, [id]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentContent.trim() || !post) return;

    // In a real app, this would be an API call
    const newComment = {
      id: Date.now().toString(),
      author: commentName,
      content: commentContent,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    };

    // Add comment to post (in real app, this would update via API)
    setPost({
      ...post,
      comments: [...post.comments, newComment]
    });

    setCommentName("");
    setCommentContent("");
  };

  const handleCommentLike = (commentId: string) => {
    if (!post) return;
    
    if (likedComments.has(commentId)) {
      return; // Already liked
    }

    setLikedComments(new Set([...likedComments, commentId]));
    
    // Update comment likes (in real app, this would be API call)
    setPost({
      ...post,
      comments: post.comments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    });
  };

  // Get icon based on category
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Business Management": <BarChart3 className="w-16 h-16" />,
      "Technology": <Zap className="w-16 h-16" />,
      "Operations": <Settings className="w-16 h-16" />,
      "Marketing": <Target className="w-16 h-16" />,
      "POS System": <ShoppingCart className="w-16 h-16" />,
    };
    return iconMap[category] || <FileText className="w-16 h-16" />;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            {/* Category Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 border-2 border-primary/30 flex items-center justify-center text-primary group-hover:border-primary/60 transition-all shadow-[0_0_30px_rgba(140,60,255,0.3)]">
                {getCategoryIcon(post.category)}
              </div>
            </div>

            <div className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm mx-auto block text-center">
              <span className="text-sm text-primary font-semibold">{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">{post.author}</span>
                <span className="text-muted-foreground">• {post.authorRole}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-primary" />
                <span>{views.toLocaleString()} views</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2 justify-center">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/30 text-sm text-foreground border border-border/50">
                  <Tag className="w-3 h-3 text-primary" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <article className="max-w-2xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-12 prose-h1:leading-tight prose-h1:border-b prose-h1:border-border/50 prose-h1:pb-4
              prose-h2:text-2xl prose-h2:mb-5 prose-h2:mt-12 prose-h2:text-primary prose-h2:flex prose-h2:items-center prose-h2:gap-3
              prose-h2:before:content-[''] prose-h2:before:w-1 prose-h2:before:h-8 prose-h2:before:bg-gradient-to-b prose-h2:before:from-primary prose-h2:before:to-secondary prose-h2:before:rounded-full
              prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-10 prose-h3:text-foreground
              prose-p:text-muted-foreground prose-p:text-base prose-p:leading-[1.8] prose-p:mb-6 prose-p:font-normal
              prose-strong:text-foreground prose-strong:font-bold prose-strong:text-base
              prose-a:text-primary prose-a:no-underline prose-a:border-b-2 prose-a:border-primary/50 hover:prose-a:border-primary prose-a:font-medium prose-a:transition-colors
              prose-li:text-muted-foreground prose-li:text-base prose-li:leading-[1.8] prose-li:mb-3 prose-li:pl-2
              prose-ul:space-y-3 prose-ul:mb-8 prose-ul:list-none prose-ul:pl-0
              prose-ul:before:content-[''] prose-ul:before:block
              prose-ol:space-y-3 prose-ol:mb-8 prose-ol:pl-6
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-8 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-normal
              prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
              prose-pre:bg-background/50 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8 prose-pre:overflow-x-auto
              prose-img:rounded-xl prose-img:border prose-img:border-border/50 prose-img:my-10 prose-img:shadow-xl
              prose-hr:border-border/50 prose-hr:my-10
            ">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="flex items-center gap-3 mt-12 mb-5 text-2xl font-bold text-primary">
                      <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full flex-shrink-0"></span>
                      <span>{children}</span>
                    </h2>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-3 mb-8 list-none pl-0">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-3 mb-3 text-base leading-[1.8] text-muted-foreground pl-0">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                      <div className="flex-1">{children}</div>
                    </li>
                  ),
                  p: ({ children }) => (
                    <p className="text-base leading-[1.8] mb-6 text-muted-foreground font-normal">
                      {children}
                    </p>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Comments ({post.comments.length})
              </h2>
            </div>

            {/* Comment Form */}
            <Card className="card-gradient border-border/50">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Leave a Comment</h3>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <Input
                    placeholder="Your name"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="bg-background border-border"
                    required
                  />
                  <Textarea
                    placeholder="Write your comment..."
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    className="bg-background border-border min-h-32"
                    required
                  />
                  <Button type="submit" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                    Post Comment
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-6">
              {post.comments.map((comment) => (
                <Card key={comment.id} className="card-gradient border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-foreground">{comment.author}</h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(comment.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCommentLike(comment.id)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${
                          likedComments.has(comment.id)
                            ? "bg-primary/20 border-primary text-primary"
                            : "bg-secondary/30 border-border/50 text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedComments.has(comment.id) ? "fill-current" : ""}`} />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                    <p className="text-foreground leading-relaxed">{comment.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;

