import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import logoimage from "../../assets/logo.webp";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // প্রথমবার load হলে LocalStorage থেকে theme check
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // darkMode পরিবর্তন হলে update হবে
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-x-2">
          <img src={logoimage} alt="logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-800 dark:text-gray-200 text-sm font-semibold transition-colors duration-200 
                         hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-x-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 text-gray-700 dark:text-gray-200 
                       hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden rounded-md p-2 text-gray-700 dark:text-gray-200 
                       hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dialog) */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-64 overflow-y-auto 
                                bg-white dark:bg-gray-900 p-6 shadow-lg transition-colors duration-300">
          <div className="flex items-center justify-between">
            <img src={logoimage} alt="logo" className="h-8 w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-700 dark:text-gray-200 
                         hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-col gap-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-2 py-2 text-gray-800 dark:text-gray-200 
                           text-sm font-semibold transition-colors duration-200 
                           hover:bg-gray-100 hover:text-blue-600 
                           dark:hover:bg-gray-800 dark:hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
