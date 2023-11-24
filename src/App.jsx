import { useState } from "react"
import AuthContext from "./context/AuthContext";
import Register_button from "./components/Register_button";
import UserName from "./components/UserName";
import EmailBlock from "./components/EmailBlock";
import PasswordBlock from "./components/passwordBlock";
// import SubmitBlock from "./components/SubmitBlock";
function App() {
 const [step,setStep]=useState("register_button");

  return (
    <>
    <div className="container">

      <AuthContext.Provider value={{step,setStep}}>
        
        <form>
          <div className="card">
            {step == "register_button" && <Register_button></Register_button>}
            {step == "userName" && <UserName></UserName>} 
            {step == "emailBlock" && <EmailBlock></EmailBlock>}
            {step == "passwordBlock" && <PasswordBlock></PasswordBlock>}
          </div>
        </form>
          
      </AuthContext.Provider>
    </div>

    </>
  )
}

export default App
