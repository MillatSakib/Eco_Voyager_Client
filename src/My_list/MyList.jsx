import { Helmet, HelmetProvider } from "react-helmet-async";
import MyAddedTouristSpot from "./MyAddedTouristSpot";

const MyList = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Eco Voyager - My List</title>
      </Helmet>
      <div>
        <div className="text-2xl md:text-3xl text-center font-bold underline mb-6 lg:mb-8 text-base-content">
          Here All Your Added Tourist Spot
        </div>
        <MyAddedTouristSpot></MyAddedTouristSpot>
      </div>
    </HelmetProvider>
  );
};

export default MyList;
