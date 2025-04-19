import React from "react";

const Sidebar = () => {
  const items = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (href) => {
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="max-w-3xl flex-1 w-full text-white p-6">
      <p className="text-5xl font-bold mb-4">John Virgil Carvajal</p>
      <p className="text-2xl font-medium mb-4">Software Engineer</p>
      <p className="mb-8 text-gray-400 w-3/4">
        A passionate and creative developer who loves building fun, interactive
        apps that make learning and communication easier for everyone.
      </p>
      <nav className="space-y-4">
        {items.map((section) => (
          <button
            key={section.href}
            onClick={() => handleClick(section.href)}
            className="block text-lg hover:text-cyan-400 transition duration-300 ease-in-out"
            tabIndex={0}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
