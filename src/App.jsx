import { useState } from "react"
import {Formik,Form} from 'formik';
import { signUpSchema } from "./schemas/signUpSchema";
import AuthContext from "./context/AuthContext";
import Register_button from "./components/Register_button";
import UserName from "./components/UserName";
import EmailBlock from "./components/EmailBlock";
import PasswordBlock from "./components/PasswordBlock";
 import SubmitBlock from "./components/SubmitBlock";

function App() {
 const [step,setStep]=useState("register_button");
const initialValues ={
  userName:"",
  email:"",
  password:"",
}
const onSubmit = (value)=>{
  console.log(value)
}
  return (
    <>
    <div className="container">

      <AuthContext.Provider value={{step,setStep}}>
        
            <Formik validationSchema={signUpSchema} initialValues={initialValues} onSubmit={onSubmit}>
              <Form autoComplete="off">
                
                  {step == "register_button" && <Register_button></Register_button>}
                  {step == "userName" && <UserName></UserName>} 
                  {step == "emailBlock" && <EmailBlock></EmailBlock>}
                  {(step === "passwordBlock" || step === "submitBlock") && (
                <>
                  <PasswordBlock />
                  <SubmitBlock />
                </>
              )}
                  
                  
                
              </Form>
            </Formik>

      </AuthContext.Provider>
    </div>

    </>
  )
}

export default App
