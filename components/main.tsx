import { View } from "react-native";
import Home from "../views/home";
import Availability from "../views/availability";
import Settings from "../views/settings";


function Main({ view }: { view: string }) {
  switch (view) {
    case "home":
      return <Home />;
    case "availability":
      return <Availability />;
    case "settings":
      return <Settings />;
    default:
      return <Home />;
  }
}

export default Main;
