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
// import ViewDetails from "./ViewDetails/ViewDetails.jsx";

const PublicRotes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Tamplate></Tamplate>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
          path: "/",
          loader: () =>
            fetch(
              `https://millatsakib.github.io/img-src/assignment%209/Data/assignment9.json`
            ),
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
        //   {
        //     path: "/property/:propertyID",
        //     element: (
        //       <PrivateRoutes>
        //         <ViewDetails></ViewDetails>
        //       </PrivateRoutes>
        //     ),
        //     loader: ({ params }) =>
        //       fetch(
        //         `https://millatsakib.github.io/img-src/assignment%209/Data/00${params.propertyID}.json`
        //       ),
        //   },
      ],
    },
  ]);
  return routes;
};

export default PublicRotes;
