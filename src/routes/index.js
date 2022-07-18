import Home from "../pages/Home";
import Voting from "../pages/Voting";
import Breeds from "../pages/Breeds";
import Gallery from "../pages/Gallery";

export const Routes = [
  { path: "/", element: Home },
  { path: "/voting", element: Voting },
  { path: "/breeds", element: Breeds },
  { path: "/gallery", element: Gallery },
];
