import { NavLink } from "react-router-dom";

const VeiwCard = ({ cardData }) => {
  const descirption = cardData?.description?.substring(0, 150) + "  .....";
  const IdNumber = cardData?._id;

  return (
    <div
      className="hover:shadow-2xl border-2 rounded-lg flex flex-col justify-between"
      data-aos="zoom-in"
    >
      <div>
        <div className="rounded-lg m-2">
          <img src={cardData?.img_url} className="w-full rounded-lg"></img>
        </div>
        <div className="m-3 flex justify-between border-b-2 pb-2">
          <div className="text-[1rem] text-slate-600 font-semibold">
            {cardData.spot_name.toUpperCase()}
          </div>
          <div className="text-[1rem] text-slate-600 font-semibold">
            Visitors: {cardData.vis_per_y} people/year
          </div>
        </div>
        <div className="my-3 mx-3 pb-3 border-b-2 text-left">{descirption}</div>
        <div className="my-3 mx-3 justify-between flex">
          <div className="text-xs text-blue-500 font-semibold">
            Location :&nbsp;{cardData.location}
          </div>
          <div className="text-xs text-orange-500 font-semibold">
            Average Cost: $ {cardData.avg_cost}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between mx-4">
          <div className="mx-3 text-[.9rem] text-orange-500">
            <span className="font-semibold">Seasonality: </span>{" "}
            {cardData.seasonality.charAt(0).toUpperCase() +
              cardData.seasonality.slice(1)}
          </div>
          <div className="text-orange-500">
            <span className="font-semibold">Need Travel Time:</span>{" "}
            {cardData.travel_time} Days
          </div>
        </div>

        <div className="mx-4 mt-auto mb-6">
          <NavLink
            to={`/tourist_spot_details/${IdNumber}`}
            className="btn bg-orange-500 text-white w-full rounded-2xl"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VeiwCard;
