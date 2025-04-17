import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import CustomCursor from "./components/CustomCursor";
import TextCursor from "./components/TextCursor";
import TextPressure from "./components/TextPressure";
import GooeyNav from "./components/GooeyNav";

function App() {
  // update with your own items
  const items = [
    { label: "About", href: "#" },
    { label: "Experience", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <>
      <CustomCursor />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[50%] lg:flex-col lg:justify-between lg:py-24">
            <GooeyNav items={items} />
          </div>
          <div className="pt-24 lg:w-[50%] w-full lg:py-24 bg-amber-300">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
