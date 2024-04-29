import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyAddedSpotEdit = () => {
  const DefaultData = useLoaderData();

  const { user } = useContext(AuthContext);
  const formRef = useRef(null);
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const spot_name = form.spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const travel_time = form.travel_time.value;
    const avg_cost = form.avg_cost.value;
    const vis_per_y = form.vis_per_y.value;
    const email = form.email.value;
    const name = form.name.value;
    const img_url = form.img_url.value;
    const seasonality = form.seasonality.value;
    const description = form.description.value;

    const spotDetails = {
      spot_name,
      country_name,
      location,
      travel_time,
      avg_cost,
      vis_per_y,
      email,
      name,
      img_url,
      seasonality,
      description,
    };

    fetch(`https://voyager-omega.vercel.app/updateSpot/${DefaultData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotDetails),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully Updated this spot!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
        formRef.current.reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        toast.error(error, {
          position: "bottom-right",
        });
      });
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Eco Voyager - My List Update</title>
      </Helmet>
      <div className="flex items-center justify-center my-10">
        <form onSubmit={handlesubmit} ref={formRef}>
          <div className="flex gap-2">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Tourist Spot Name</span>
              </div>
              <input
                required
                defaultValue={DefaultData.spot_name}
                name="spot_name"
                type="text"
                placeholder="Spot Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Country Name</span>
              </div>
              <select id="dropdown" required name="country_name">
                <option value="" disabled>
                  Select a Country
                </option>
                <option
                  value="Bangladesh"
                  selected={DefaultData.country_name === "Bangladesh"}
                >
                  Bangladesh
                </option>
                <option
                  value="Thailand"
                  selected={DefaultData.country_name === "Thailand"}
                >
                  Thailand
                </option>
                <option
                  value="Indonesia"
                  selected={DefaultData.country_name === "Indonesia"}
                >
                  Indonesia
                </option>
                <option
                  value="Malaysia"
                  selected={DefaultData.country_name === "Malaysia"}
                >
                  Malaysia
                </option>
                <option
                  value="Vietnam"
                  selected={DefaultData.country_name === "Vietnam"}
                >
                  Vietnam
                </option>
                <option
                  value="Cambodia"
                  selected={DefaultData.country_name === "Cambodia"}
                >
                  Cambodia
                </option>
              </select>
            </label>
          </div>

          <div className="flex gap-2">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                required
                defaultValue={DefaultData.location}
                name="location"
                placeholder="Location"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Travel Time(In Days)</span>
              </div>
              <input
                required
                defaultValue={DefaultData.travel_time}
                name="travel_time"
                type="number"
                placeholder="Travel Time (eg : 7)"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="flex gap-2">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Avarage Cost</span>
              </div>
              <input
                required
                defaultValue={DefaultData.avg_cost}
                name="avg_cost"
                type="number"
                placeholder="Avarage Cost"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Total Visitors Per Year</span>
              </div>
              <input
                required
                defaultValue={DefaultData.vis_per_y}
                name="vis_per_y"
                type="number"
                placeholder="Vistitors/Year"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="flex gap-2">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                name="email"
                type="email"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                defaultValue={user?.email}
                disabled
              />
            </label>

            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered w-full max-w-xs"
                disabled
              />
            </label>
          </div>

          <div className="flex gap-2">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Image Link</span>
              </div>
              <input
                required
                defaultValue={DefaultData.img_url}
                name="img_url"
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Seasonality</span>
              </div>
              <input
                required
                defaultValue={DefaultData.seasonality}
                name="seasonality"
                type="text"
                placeholder="Seasonality (eg : summer)"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="mx-4 my-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Descriotion</span>
              </div>
              <textarea
                required
                defaultValue={DefaultData.description}
                name="description"
                placeholder="Write details here..."
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </label>
          </div>
          <div className="mx-4 my-4">
            <input
              type="submit"
              className="btn btn-success text-white w-full"
              value="Update"
            ></input>
          </div>
        </form>
      </div>
    </HelmetProvider>
  );
};
export default MyAddedSpotEdit;
