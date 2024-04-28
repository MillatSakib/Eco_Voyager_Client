import { useContext, useEffect, useState } from "react";
import TableBody from "./TableBody";
import { AuthContext } from "../AuthProvider";

const MyAddedTouristSpot = () => {
  const [myListData, setMyListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadApi, setLoadApi] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://voyager-omega.vercel.app/my_added_spot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMyListData(data);
      });
  }, [loadApi]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          {" "}
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto mx-8">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Tourist Spot Name</th>
                  <th>Country</th>
                  <th>Location</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {myListData.map((myData, index) => {
                  return (
                    <TableBody
                      myData={myData}
                      key={index}
                      index={index}
                      loadApi={loadApi}
                      setLoadApi={setLoadApi}
                    ></TableBody>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAddedTouristSpot;
