import { useState, useEffect, useMemo } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  // Memoize the sections array to prevent unnecessary re-renders
  const sections = useMemo(
    () => ["section1", "section2", "section3", "section4", "section5"],
    []
  );

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY + window.innerHeight / 2;

      let active = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            currentScroll >= offsetTop &&
            currentScroll < offsetTop + offsetHeight
          ) {
            active = section;
          }
        }
      });

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]); // sections is now memoized

  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center bg-gray-800 text-white">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`p-2 m-2 w-12 h-12 flex items-center justify-center rounded-full ${
            activeSection === section ? "bg-blue-500" : "bg-gray-600"
          }`}
        >
          {section.slice(-1)}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
