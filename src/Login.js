import { useState } from "react";
import { log } from "./Action";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const handelsub = () => {
    const data = { email: email, password: pass };
    dispatch(log(data, props));
  };

  return (
    <div>
        <p>RajKundra123@gmail.com email and password</p>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      ></input>
      <br />
      <input
        type="text"
        value={pass}
        onChange={(e) => {
          setpass(e.target.value);
        }}
      ></input>
      <button onClick={handelsub}>Login</button>
    </div>
  );
};
export default Login;
