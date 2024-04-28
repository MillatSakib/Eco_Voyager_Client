import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import swal from "sweetalert";

const TableBody = ({ myData, index, loadApi, setLoadApi }) => {
  const handleDelete = () => {
    console.log("hello");
    swal({
      title: "Are you sure?",
      text: "If click delete, you will not be able to recover this data again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://voyager-omega.vercel.app/myAddedSpot/${myData?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const temp = loadApi;
            setLoadApi(!temp);
            swal("Your Data has been deleted!", {
              icon: "success",
            });
          });
      } else {
        swal("Ok, we aren't deleted your Data!");
      }
    });
  };
  //   console.log(myData, index);
  //  spot_name,
  //     country_name,
  //     location,
  //     travel_time,
  //     avg_cost,
  //     vis_per_y,
  //     email,
  //     name,
  //     img_url,
  //     seasonality,
  //     description,
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{myData.spot_name}</td>
        <td>{myData.country_name}</td>
        <td>{myData.location}</td>
        <td className="">
          <FaEdit className="cursor-pointer p-2 text-4xl text-green-600 hover:bg-slate-200 rounded-2xl select-none" />
        </td>

        <td className="">
          <button onClick={handleDelete}>
            <MdDelete className="cursor-pointer p-2 text-4xl text-red-600 hover:bg-slate-200 rounded-full select-none" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableBody;
