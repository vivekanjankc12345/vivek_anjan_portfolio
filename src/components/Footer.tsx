// React import not required with the new JSX transform
import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-8">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 mx-auto"
            >
              <ArrowUp className="text-white" size={20} />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-white font-semibold text-lg">
                VIVEK ANJAN
              </span>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating amazing digital
              experiences
            </p>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              © 2025 Vivek Anjan. Made with{" "}
              <Heart
                className="text-pink-500 mx-1"
                size={16}
                fill="currentColor"
              />
              and lots of coffee —
              <a
                href="https://drive.google.com/uc?export=download&id=1lnvrPNMV44kSOCOWi1VKCjhP17DLQr2M"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 ml-2 hover:text-pink-400 transition-colors duration-200"
              >
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
