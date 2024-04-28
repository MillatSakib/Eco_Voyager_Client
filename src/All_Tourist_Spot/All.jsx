import { useLoaderData } from "react-router-dom";
import VeiwCard from "./VeiwCard";

const All = () => {
  const allTouristSpotData = useLoaderData();
  console.log(allTouristSpotData);
  return (
    <div className="w-[95%] md:w-[80%] lg:w-[75%] text-center mx-auto text-slate-600 mb-10">
      <div className="my-10 text-2xl md:text-3xl font-semibold">
        All Tourist Spot
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTouristSpotData.map((cardData, index) => (
          <VeiwCard cardData={cardData} key={index}></VeiwCard>
        ))}
      </div>
    </div>
  );
};

export default All;
