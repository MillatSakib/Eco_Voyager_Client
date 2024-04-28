import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";

const AddSpot = () => {
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
    // console.log(
    // spot_name,
    // country_name,
    // location,
    // travel_time,
    // avg_cost,
    // vis_per_y,
    // email,
    // name,
    // img_url,
    // seasonality,
    // description
    // );
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

    fetch("https://voyager-omega.vercel.app/addSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotDetails),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully added this spot!", {
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
    <div className="flex items-center justify-center my-10">
      <form onSubmit={handlesubmit} ref={formRef}>
        <div className="flex gap-2">
          <label className="form-control w-full max-w-xs mx-4 my-2">
            <div className="label">
              <span className="label-text">Tourist Spot Name</span>
            </div>
            <input
              required
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
            <input
              required
              name="country_name"
              type="text"
              placeholder="Country Name"
              className="input input-bordered w-full max-w-xs"
            />
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
            value="Add"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddSpot;
