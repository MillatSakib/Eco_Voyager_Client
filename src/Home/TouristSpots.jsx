import { useEffect, useState } from "react";
import VeiwCard from "../All_Tourist_Spot/VeiwCard";

const TouristSpots = () => {
  const [loader, setLoader] = useState(true);
  const [allTouristSpotData, setAllTouristSpotData] = useState([]);
  useEffect(() => {
    fetch(`https://voyager-omega.vercel.app/allSixSpots`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setAllTouristSpotData(data);
      });
  }, []);
  return (
    <>
      {loader ? (
        <div className="flex items-center justify-center">
          {" "}
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="w-[95%] md:w-[80%] lg:w-[90%] text-center mx-auto text-slate-600 mb-10">
          <div className="my-10 text-2xl md:text-3xl font-semibold">
            All Tourist Spot
          </div>
          <p className="mb-8 text-center">
            Discover breathtaking landscapes, cultural gems, and hidden
            treasures in our tourist spot section. Unveil the wonders of our
            destinations, from iconic landmarks to off-the-beaten-path
            adventures. Explore, dream, and wander endlessly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTouristSpotData.map((cardData, index) => (
              <VeiwCard cardData={cardData} key={index}></VeiwCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TouristSpots;
