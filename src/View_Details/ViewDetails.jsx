import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const detailData = useLoaderData();
  console.log(detailData);
  return <div>This is view Details</div>;
};

export default ViewDetails;
