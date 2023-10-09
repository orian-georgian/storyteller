import { Stories, UnderConstruction, Redirect } from "../pages";

const App_Routes = [
  {
    path: "/",
    component: Redirect,
  },
  {
    path: "/schedule",
    component: UnderConstruction,
  },
  {
    path: "/analytics",
    component: UnderConstruction,
  },
  {
    path: "/stories",
    component: Stories,
  },
  {
    path: "/engagement-units",
    component: UnderConstruction,
  },
  {
    path: "/ads",
    component: UnderConstruction,
  },
  {
    path: "/cms-users",
    component: UnderConstruction,
  },
  {
    path: "/roles",
    component: UnderConstruction,
  },
  {
    path: "/apps",
    component: UnderConstruction,
  },
  {
    path: "/user-guide",
    component: UnderConstruction,
  },
];

export default App_Routes;
