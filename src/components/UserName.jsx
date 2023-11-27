import { FaArrowRight } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import {Field,ErrorMessage,useFormikContext} from 'formik';


const UserName = () => {
const {setStep} = useContext(AuthContext);
const formik =useFormikContext();
const handleNextStep = () =>{
  if(!formik.errors.userName){
    setStep("emailBlock");
  }

}

  return (
    <>
      <div className="card">
        <Field
          type="text" 
          placeholder="Create your username"
          name="userName"
          id="userName" 
          autoFocus/> 
        <button onClick={handleNextStep} type="button"><FaArrowRight></FaArrowRight></button>
      </div>
        <ErrorMessage name="userName" component="p" className="error"></ErrorMessage>

     
    </>
  );
}

export default UserName