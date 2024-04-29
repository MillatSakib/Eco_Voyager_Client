import NotFoundPage from "./ErroPage/NotFound.jsx";
import { createBrowserRouter } from "react-router-dom";
import Tamplate from "./Tamplate.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import PrivateRoutes from "./PrivateRoutes/MainPrivateRoutes.jsx";
import AuthPrivateRoute from "./PrivateRoutes/AuthPrivateRoute.jsx";
import AddSpot from "./Add_Tourist_Spot/Add_spot.jsx";
import MyList from "./My_list/MyList.jsx";
import All from "./All_Tourist_Spot/All.jsx";
import MyAddedSpotEdit from "./My_added_spot_edit/MyAddedSpotEdit.jsx";
import ViewDetails from "./View_Details/ViewDetails.jsx";
import AllTouristSpotCountry from "./AllTouristSpot_Country/AllTouristSpotCountry.jsx";

const PublicRotes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Tamplate></Tamplate>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/all_tourist_spot",
          element: <All></All>,
        },
        {
          path: "/add_spot",
          element: (
            <PrivateRoutes>
              <AddSpot></AddSpot>
            </PrivateRoutes>
          ),
        },
        {
          path: "/my_list",
          element: (
            <PrivateRoutes>
              <MyList></MyList>
            </PrivateRoutes>
          ),
        },
        {
          path: "/login",
          element: (
            <AuthPrivateRoute>
              <Login></Login>
            </AuthPrivateRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <AuthPrivateRoute>
              <Register></Register>
            </AuthPrivateRoute>
          ),
        },
        {
          path: "/my-added-spot-edit/:id",
          element: (
            <PrivateRoutes>
              <MyAddedSpotEdit></MyAddedSpotEdit>
            </PrivateRoutes>
          ),
          loader: ({ params }) =>
            fetch(`https://voyager-omega.vercel.app/myAddedSpot/${params.id}`),
        },
        {
          path: "/tourist_spot_on_country/:name",
          element: (
            <PrivateRoutes>
              <AllTouristSpotCountry></AllTouristSpotCountry>
            </PrivateRoutes>
          ),
          loader: ({ params }) =>
            fetch(
              `https://voyager-omega.vercel.app/allTouristSpot/${params.name}`
            ),
        },

        {
          path: "/tourist_spot_details/:spotID",
          element: (
            <PrivateRoutes>
              <ViewDetails></ViewDetails>
            </PrivateRoutes>
          ),
          loader: ({ params }) =>
            fetch(
              `https://voyager-omega.vercel.app/tourist_spot_details/${params.spotID}`
            ),
        },
      ],
    },
  ]);
  return routes;
};

export default PublicRotes;
