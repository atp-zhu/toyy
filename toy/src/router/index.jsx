import Catalog from "../page/catalog";
import Delivery from "../page/delivery";
import Detail from "../page/detail";
import App from "../App";
import ToyStore from "../page/toystore";
import About from "../page/about";
import Contacts from "../page/contacts";
import Login from "../page/login";
import Admin from "../page/admin";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App></App>,
  children: [
   {
    index:true,
    element: <Catalog></Catalog>
   },
   {
    path: "delivery",
    element: <Delivery></Delivery>
   },
   {
    path: "detail",
    element: <Detail></Detail>
   },
   {
    path: "toystore",
    element: <ToyStore></ToyStore>
   },
   {
    path: "about",
    element: <About></About>
   },
   {
    path: "contact",
    element: <Contacts></Contacts>
   }
  ]
 },
 {
  path: "login",
  element: <Login></Login>
 },
 {
  path: "admin",
  element: <Admin></Admin>
 }
 
])
export default router;