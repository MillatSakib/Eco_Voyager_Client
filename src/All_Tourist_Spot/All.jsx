import { Helmet, HelmetProvider } from "react-helmet-async";
import VeiwCard from "./VeiwCard";
import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

const All = () => {
  const [loader, setLoader] = useState(true);
  const [allTouristSpotData, setAllTouristSpotData] = useState([]);
  const [sort, setSort] = useState(1);
  useEffect(() => {
    fetch(`https://voyager-omega.vercel.app/allTouristSpots/${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setAllTouristSpotData(data);
      });
  }, [sort]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Eco Voyager - All Tourist Spot</title>
      </Helmet>
      {loader ? (
        <div className="flex items-center justify-center">
          {" "}
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      ) : (
        <div className="w-[95%] md:w-[80%] lg:w-[75%] text-center mx-auto text-slate-600 mb-10">
          <div className="z-50">
            <Dropdown setSort={setSort}></Dropdown>
          </div>
          <div className="my-10 text-2xl md:text-3xl font-semibold text-base-content">
            All Tourist Spot
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTouristSpotData.map((cardData, index) => (
              <VeiwCard cardData={cardData} key={index}></VeiwCard>
            ))}
          </div>
        </div>
      )}
    </HelmetProvider>
  );
};

export default All;
