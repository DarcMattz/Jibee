import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Portfolio = () => {
  return (
    <div className="w-screen h-screen bg-[#213448] p-6 flex-col lg:p-12 lg:mx-auto lg:flex lg:flex-row lg:justify-center lg:items-start overflow-y-auto">
      <div className="flex-1 lg:sticky top-6 self-start">
        <Sidebar />
      </div>
      <div className="flex-1 lg:w-7/12">
        <Content />
      </div>
    </div>
  );
};

export default Portfolio;
