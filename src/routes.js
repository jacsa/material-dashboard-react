/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Pais from "views/Pais/index";
import EditPais from "./views/Pais/Edit";
{/* <Route exact path="/admin/pais/editpais/:id" component={EditPais} /> */}

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    visible : true
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    visible : true
  },
  {
    path: "/pais",
    name: "Country",
    rtlName: "طباعة",
    icon: LocationOn,
    component: Pais,
    layout: "/admin",
    visible : true
  },
  {
    path: "/edit/:id",
    name: "Country Edit",
    icon: LocationOn,
    component: EditPais,
    layout: "/admin/pais",
    visible : false
  }
];

export default dashboardRoutes;
