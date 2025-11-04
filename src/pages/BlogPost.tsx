import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Eye, MessageCircle, Heart, ArrowLeft, Tag } from "lucide-react";
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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm">
              <span className="text-sm text-primary font-semibold">{post.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50">
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
            
            <div className="flex flex-wrap gap-2 pt-2">
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

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-2xl border border-border/50 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-li:text-muted-foreground">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
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

