import { BsPeopleFill } from "react-icons/bs";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
const Register_button = () => {
  let {setStep}=useContext(AuthContext);
  return (
    
    <div className="card">
      <span onClick={()=>setStep("userName")}>
        <label htmlFor="register_button">Register  < BsPeopleFill></BsPeopleFill></label>
      </span>
    </div>
  )
}

export default Register_button