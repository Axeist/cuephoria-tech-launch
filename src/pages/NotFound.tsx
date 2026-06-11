import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrialCTA from "@/components/TrialCTA";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex min-h-[70vh] items-center justify-center px-4 pt-24">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-6xl font-bold text-gradient">404</h1>
          <p className="text-xl text-muted-foreground">Page not found</p>
          <p className="text-sm text-muted-foreground">
            Looking for our venue software? Try Cuetronix free for 14 days — no auto-pay mandate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <TrialCTA size="default" />
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-primary/50 hover:bg-primary/10 text-foreground"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
