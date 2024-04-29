import { Helmet, HelmetProvider } from "react-helmet-async";
import SwipeBanner from "./SwipeBanner";
import TouristSpots from "./TouristSpots";
import CountyCard from "./County_card";
import { useEffect, useState } from "react";

function Home() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    fetch("https://voyager-omega.vercel.app/find_all_country")
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Eco Voyager - Home</title>
      </Helmet>
      <div>
        <SwipeBanner></SwipeBanner>
      </div>

      <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto">
        <TouristSpots></TouristSpots>
      </div>
      <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {countryData.map((countryData, index) => (
          <CountyCard countryData={countryData} key={index}></CountyCard>
        ))}
      </div>
    </HelmetProvider>
  );
}

export default Home;
