// import DemoTaskBoard from "../Component/DemoTaskBoard";
import FeatureSection from "../Component/FeatureSection";
import HeroSection from "../Component/HeroSection";

const Home = () => {
  return (
    <div>
  
      {/* <div className="p-24 text-center">
        <h2 className="text-3xl font-bold">Capture tasks wherever you are</h2>
        <p className="text-lg font-thin">
          Review tasks on your phone, add them from your laptop, complete them
          from your watch. Then see it all sync in real-time.
        </p>
      </div> */}
      <div>
        <div className="w-full min-h-screen bg-gray-100">
         
          <div className="">
          <HeroSection />
          {/* <DemoTaskBoard /> */}
          </div>
          <FeatureSection />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
