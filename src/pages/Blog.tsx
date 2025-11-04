import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Eye, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Insights, guides, and expert advice on gaming lounge management, POS systems, and business growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground border-primary shadow-[0_0_20px_rgba(140,60,255,0.3)]"
                    : "bg-card border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.id}
                className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(140,60,255,0.35)] animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                      <span className="text-xs font-semibold text-background">{post.category}</span>
                    </div>
                  </div>
                </Link>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/30 text-xs text-muted-foreground">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm group/link"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

