
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm text-centre">
        <div className="w-20 h-20 bg-flux-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <h1 className="text-4xl font-bold text-flux-800">404</h1>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col gap-3">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-flux-800 text-white rounded-lg font-medium transition-all hover:bg-flux-700"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Link>
          
          <div className="text-sm text-gray-500 mt-2">
            Or check out our <Link to="/services" className="text-flux-700 hover:underline">services</Link> or <Link to="/contact" className="text-flux-700 hover:underline">contact us</Link> for help.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
