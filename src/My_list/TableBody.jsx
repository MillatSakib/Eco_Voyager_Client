import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TableBody = ({ myData, index }) => {
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
          <MdDelete className="cursor-pointer p-2 text-4xl text-red-600 hover:bg-slate-200 rounded-full select-none" />
        </td>
      </tr>
    </>
  );
};

export default TableBody;
