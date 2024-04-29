import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const detailData = useLoaderData();

  // name,

  // seasonality,

  // );
  console.log(detailData);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Eco Voyager - {detailData.spot_name}</title>
      </Helmet>
      <div className="my-10 w-[95%] md:w-[90%] lg:w-[80%] lg:max-w-[1250px] mx-auto">
        <img src={detailData.img_url} className="rounded-lg"></img>
        <div className="flex justify-between mx-4 my-2">
          <div className="font-bold text-orange-500">
            Spot Name: {detailData.spot_name}
          </div>
          <div className="font-bold text-blue-500">
            Average Cost: ${detailData.avg_cost}
          </div>
        </div>
        <div className="text-2xl font-bold mx-4 text-blue-500">
          Situated in {detailData.country_name}, {detailData.location}
        </div>
        <div className="my-4 mx-4">
          <h2 className="text-3xl my-2 font-bold text-slate-800">
            Description
          </h2>
          <p>{detailData.description}</p>
        </div>
        <div>
          <span className="font-semibold ml-4 text-slate-700">
            You need to take time
          </span>
          &nbsp;
          {detailData.travel_time} days
        </div>
        <div className="flex justify-between mx-4 my-2">
          <div className="font-bold text-orange-500">
            Visitors: {detailData.vis_per_y} person/year
          </div>
          <div className="font-bold text-blue-500">
            Seasonality: {detailData.seasonality}
          </div>
        </div>
        <div className="text-right my-6">
          <span className="font-semibold">Added by </span>
          {detailData.name}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ViewDetails;
