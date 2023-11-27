import { FaArrowRight } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import {Field,ErrorMessage,useFormikContext} from 'formik';
const EmailBlock = () => {
  const {setStep} = useContext(AuthContext);
  const formik =useFormikContext();
  const handleNextStep = () =>{
    if(!formik.errors.email){
      setStep("passwordBlock");
    }
  
  }
  return (
    <>
    <div className="card">
      <Field 
      type="email" 
      placeholder="What´s your email"
      id="email"
      name="email"
      autoFocus
      />
      <button type="button" onClick={handleNextStep}><FaArrowRight></FaArrowRight></button>
    </div>
    <ErrorMessage name="email" component="p" className="error"></ErrorMessage>
  </>
  )
}

export default EmailBlock