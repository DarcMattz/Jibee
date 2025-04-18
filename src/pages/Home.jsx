import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Portfolio = () => {

    return (
        <div className="w-screen h-screen bg-gray-300 p-6 lg:p-12 lg:mx-auto lg:flex lg:flex-row lg:justify-center lg:items-center">
            <div className="flex-1 ">
                <Sidebar />
            </div>
            <div className="flex-1">
                <Content />
            </div>
        </div>
    );
}

export default Portfolio;