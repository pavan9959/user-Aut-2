import Router2 from "./Router2";
import Login from "./Login";
import Router1 from "./Router1";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [toggle, settoggle] = useState(false);

  const state = useSelector((state) => {
    return state.state;
  });

  const state1 = useSelector((state) => {
    return state.state1;
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      settoggle(true);
    } else {
      settoggle(false);
    }
  }, [state, state1]);

  return <div>{toggle ? <Router2 /> : <Router1 />}</div>;
}

export default App;
