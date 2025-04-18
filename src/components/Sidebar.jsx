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
        <div className="flex-1 w-1/2 text-white p-6 min-h-screen">
            <h1 className="text-2xl font-bold mb-8">Jibee</h1>
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
