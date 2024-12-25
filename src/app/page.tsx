import Feeds from "./components/CenterMainBox/Feeds";
import LeftMainBox from "./components/LeftMainBox/LeftMainBox";
import RightMainBox from "./components/RightMainBox/RightMainBox";

const Homepage = () => {
  return (
    <div id="main-home-container" className="flex gap-2 sm:gap-0 ">
      {/* LEFT */}
      <div id="left" className="hidden xl:flex  w-[20%] ">
      <LeftMainBox type={"home"}/>
      </div>
      {/* CENTER */}
      <div id="center" className="w-full h-100vh lg:w-[70%] xl:w-[50%] overflow-y-scroll  ">
        <Feeds/>
      </div>
      {/* RIGHT */}
      <div id="right" className="hidden lg:flex w-[30%]  ">
        <RightMainBox userId={""} />
      </div>
    </div>
  );
};

export default Homepage;
