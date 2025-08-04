import { Link, useLocation } from "@remix-run/react";
import { 
  FaHome, 
  FaBlog, 
  FaInfoCircle, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaSearch,
  FaMoon,
  FaSun,
  FaCode
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const colors = {
    primary: "from-purple-500 to-pink-500",
    secondary: "from-amber-400 to-orange-500",
    accent: "from-teal-400 to-emerald-500",
    services: "from-blue-500 to-indigo-500",
    dark: {
      primary: "from-purple-400 to-pink-400",
      secondary: "from-amber-300 to-orange-400",
      accent: "from-teal-300 to-emerald-400",
      services: "from-blue-400 to-indigo-400"
    }
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    setSearchOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full  z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700" 
            : "py-4 bg-gradient-to-b from-white/90 to-transparent dark:from-gray-900/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="flex items-center group"
                onClick={() => setIsOpen(false)}
              >
                <span className={`text-3xl font-bold bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} bg-clip-text text-transparent group-hover:opacity-90 transition-opacity`}>
                  CorporateTalks
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                <NavItem 
                  path="/" 
                  icon={<FaHome />} 
                  label="Home" 
                  isActive={isActive}
                  color={colors.secondary}
                  darkColor={colors.dark.secondary}
                />
                <NavItem 
                  path="/blog" 
                  icon={<FaBlog />} 
                  label="Articles" 
                  isActive={isActive}
                  color={colors.accent}
                  darkColor={colors.dark.accent}
                />
                <NavItem 
                  path="/services" 
                  icon={<FaCode />} 
                  label="Services" 
                  isActive={isActive}
                  color={colors.services}
                  darkColor={colors.dark.services}
                />
                <NavItem 
                  path="/about" 
                  icon={<FaInfoCircle />} 
                  label="About" 
                  isActive={isActive}
                  color={colors.primary}
                  darkColor={colors.dark.primary}
                />
                <NavItem 
                  path="/contact" 
                  icon={<FaEnvelope />} 
                  label="Contact" 
                  isActive={isActive}
                  color={colors.secondary}
                  darkColor={colors.dark.secondary}
                />
              </ul>

              {/* Right side icons */}
              <div className="flex items-center space-x-4 ml-4">
                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className={`p-2 rounded-full hover:bg-gradient-to-r ${colors.accent} dark:hover:bg-gradient-to-r ${colors.dark.accent} hover:text-white transition-all duration-300`}
                  aria-label="Search"
                >
                  <FaSearch className="text-lg" />
                </button>
                
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full hover:bg-gradient-to-r ${colors.primary} dark:hover:bg-gradient-to-r ${colors.dark.primary} hover:text-white transition-all duration-300`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-4">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-full hover:bg-gradient-to-r ${colors.accent} dark:hover:bg-gradient-to-r ${colors.dark.accent} hover:text-white transition-all duration-300`}
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full hover:bg-gradient-to-r ${colors.primary} dark:hover:bg-gradient-to-r ${colors.dark.primary} hover:text-white transition-all duration-300`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
              
              <button
                className={`p-2 rounded-full hover:bg-gradient-to-r ${colors.secondary} dark:hover:bg-gradient-to-r ${colors.dark.secondary} hover:text-white transition-all duration-300`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="hidden md:block overflow-hidden"
              >
                <form onSubmit={handleSearch} className="relative mt-4 pb-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:focus:ring-pink-400"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-pink-400"
                  >
                    <FaSearch />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Bar (Mobile) */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <form onSubmit={handleSearch} className="relative px-4 pb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:focus:ring-pink-400"
                />
                <button 
                  type="submit"
                  className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-pink-400"
                >
                  <FaSearch />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 z-50 w-80 h-full bg-white dark:bg-gray-800 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <Link 
                      to="/" 
                      className={`text-xl font-bold bg-gradient-to-r ${colors.primary} dark:${colors.dark.primary} bg-clip-text text-transparent`}
                      onClick={() => setIsOpen(false)}
                    >
                      CorporateTalks
                    </Link>
                    <button
                      className={`p-2 rounded-full hover:bg-gradient-to-r ${colors.secondary} dark:hover:bg-gradient-to-r ${colors.dark.secondary} hover:text-white transition-all duration-300`}
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                    >
                      <FaTimes size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex-grow overflow-y-auto p-4">
                  <ul className="space-y-2">
                    <MobileNavItem 
                      path="/" 
                      icon={<FaHome />} 
                      label="Home" 
                      isActive={isActive}
                      color={colors.secondary}
                      darkColor={colors.dark.secondary}
                    />
                    <MobileNavItem 
                      path="/blog" 
                      icon={<FaBlog />} 
                      label="Articles" 
                      isActive={isActive}
                      color={colors.accent}
                      darkColor={colors.dark.accent}
                    />
                    <MobileNavItem 
                      path="/services" 
                      icon={<FaCode />} 
                      label="Services" 
                      isActive={isActive}
                      color={colors.services}
                      darkColor={colors.dark.services}
                    />
                    <MobileNavItem 
                      path="/about" 
                      icon={<FaInfoCircle />} 
                      label="About" 
                      isActive={isActive}
                      color={colors.primary}
                      darkColor={colors.dark.primary}
                    />
                    <MobileNavItem 
                      path="/contact" 
                      icon={<FaEnvelope />} 
                      label="Contact" 
                      isActive={isActive}
                      color={colors.secondary}
                      darkColor={colors.dark.secondary}
                    />
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({
  path,
  icon,
  label,
  isActive,
  color,
  darkColor
}: {
  path: string;
  icon: React.ReactNode;
  label: string;
  isActive: (p: string) => boolean;
  color: string;
  darkColor: string;
}) {
  return (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={path}
        className={`flex items-center gap-2 font-medium transition-all duration-300 ${
          isActive(path) 
            ? `bg-gradient-to-r ${color} dark:${darkColor} text-white px-3 py-1 rounded-full shadow-md` 
            : "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-pink-400"
        }`}
      >
        <span className="opacity-80">{icon}</span>
        {label}
      </Link>
    </motion.li>
  );
}

function MobileNavItem({
  path,
  icon,
  label,
  isActive,
  color,
  darkColor
}: {
  path: string;
  icon: React.ReactNode;
  label: string;
  isActive: (p: string) => boolean;
  color: string;
  darkColor: string;
}) {
  return (
    <motion.li whileTap={{ scale: 0.95 }}>
      <Link
        to={path}
        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-300 ${
          isActive(path) 
            ? `bg-gradient-to-r ${color} dark:${darkColor} text-white shadow-md` 
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
      >
        <span className="text-lg opacity-80">{icon}</span>
        <span className="font-medium">{label}</span>
      </Link>
    </motion.li>
  );
}