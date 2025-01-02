import Sidebar from "./SideBar";

const HomeDemo = () => {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 overflow-y-auto ">
        <Section id="section1" title="Section 1" />
        <Section id="section2" title="Section 2" />
        <Section id="section3" title="Section 3" />
        <Section id="section4" title="Section 4" />
        <Section id="section5" title="Section 5" />
      </div>
    </div>
  );
};

const Section = ({ id, title }) => (
  <div id={id} className="h-screen p-10 border-b-2">
    <h1 className="text-3xl">{title}</h1>
  </div>
);

export default HomeDemo;
