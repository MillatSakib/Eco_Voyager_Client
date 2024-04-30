import { useLoaderData } from "react-router-dom";
import VeiwCard from "../All_Tourist_Spot/VeiwCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllTouristSpotCountry = () => {
  const CountryData = useLoaderData();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Eco Voyager - All Spot</title>
      </Helmet>
      <div>
        {CountryData.length === 0 ? (
          <div className="flex items-center justify-center font-bold text-red-500 text-2xl md:text-3xl lg:text-4xl">
            There has no added tourist spot
          </div>
        ) : (
          <div>
            <div className="text-center text-2xl md:text-3xl font-bold mb-8 mt-4">
              All Tourist Spot in {CountryData[0].country_name}
            </div>
            <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CountryData.map((singleCardData, index) => (
                <VeiwCard cardData={singleCardData} key={index}></VeiwCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default AllTouristSpotCountry;
