import { View } from "react-native";
import Home from "../views/home";
import Availability from "../views/availability";
import Settings from "../views/settings";
import { MainView } from "../App";
import AddAvailability from "../views/add-availability";

function Main({
  view,
  switchView,
}: {
  view: string;
  switchView: (view: MainView) => void;
}) {
  switch (view) {
    case "home":
      return <Home />;
    case "availability":
      return <Availability switchView={switchView} />;
    case "add-availability":
      return <AddAvailability switchView={switchView} />;
    case "settings":
      return <Settings />;
    default:
      return <Home />;
  }
}

export default Main;
