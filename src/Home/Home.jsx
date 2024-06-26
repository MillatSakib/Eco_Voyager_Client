import { Helmet, HelmetProvider } from "react-helmet-async";
import SwipeBanner from "./SwipeBanner";
import TouristSpots from "./TouristSpots";
import CountyCard from "./County_card";
import { useEffect, useState } from "react";
import FAQ from "./FAQ";
import OurSpeciality from "./OurSpeciality";

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

      <div className="mt-16">
        <div className="text-center my-6 text-2xl md:text-3xl lg:text-4xl font-bold text-base-content">
          Our Specialties
        </div>
        <OurSpeciality></OurSpeciality>
      </div>

      <div className="my-10 w-[95%] md:w-[90%] lg:w-[85%] mx-auto">
        <TouristSpots></TouristSpots>
      </div>
      <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto ">
        <div className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-base-content">
          Tourist Spot in Country
        </div>
        <div className="text-base-content w-[95%] md:w-[85%] lg:w-[70%] mx-auto text-center my-8 lg:my-10">
          Explore Bangladesh's Sundarbans, Dhaka's energy, and Cox's Bazar's
          beaches. Malaysia's Petronas Towers, Malacca's history, and Cameron
          Highlands' greenery. Cambodia's Angkor Wat, Siem Reap's markets, and
          Tonlé Sap Lake. Thailand's Bangkok temples, Phuket's beaches, and
          Chiang Mai's jungles. Vietnam's Hanoi streets, Ha Long Bay, and Mekong
          Delta markets.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {countryData.map((countryData, index) => (
            <CountyCard countryData={countryData} key={index}></CountyCard>
          ))}
        </div>
      </div>
      <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
        <div className="text-center text-base-content font-bold text-2xl md:text-3xl lg:text-3xl mb-8">
          Frequently Asked Question
        </div>
        <FAQ></FAQ>
      </div>
    </HelmetProvider>
  );
}

export default Home;
