import React from "react";
import { NavLink } from "react-router-dom";

const CountyCard = ({ countryData }) => {
  return (
    <div
      className="hero min-h-[300px] my-2"
      style={{
        backgroundImage: `url(${countryData.flag_url})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {countryData.country_name}
          </h1>
          <p className="mb-5">
            For see All Tourist sopt of Bangladesh click{" "}
            <span className="font-bold">View All</span>
          </p>
          <NavLink
            to={`/tourist_spot_on_country/${countryData.country_name}`}
            className="btn btn-primary"
          >
            View All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CountyCard;
