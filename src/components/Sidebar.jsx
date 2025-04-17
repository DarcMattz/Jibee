const Sidebar = () => {
  return (
    <div className="flex-1 w-1/2 text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Jibee</h1>
      <nav className="space-y-4">
        {["about", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="block text-lg hover:text-cyan-400 transition-colors"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
