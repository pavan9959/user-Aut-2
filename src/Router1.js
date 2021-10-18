import { Link,Route } from "react-router-dom"
import Login from "./Login"

const Rou1=()=>{
    return <div>
        <Link to="/" >Login</Link>
        <Route path="/" component={Login} exaxt={true} ></Route>
    </div>
}

export default Rou1