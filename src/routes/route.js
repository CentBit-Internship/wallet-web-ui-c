
import {
  BrowserRouter as Router,
  Routes as RouterCover,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar/navbar";


export const Routes = () => {
  return (
    <Router>
        <RouterCover>
            <Route path="/" element={<Navbar />} />
        </RouterCover>
    </Router>
  );
};

export default Routes;
