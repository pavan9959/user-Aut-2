import { useDispatch } from "react-redux";
import { Link, Route, withRouter } from "react-router-dom";
import { logout } from "./Action";
import Home from "./Home";

const Router2 = (props) => {
  const dispatch = useDispatch();

  const handellogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Link to="/" onClick={handellogout}>
        logout
      </Link>
      :<Link to="/home/">Home</Link>
      <Route path="/home/" exact={true} component={Home}></Route>
    </div>
  );
};
export default withRouter(Router2);
