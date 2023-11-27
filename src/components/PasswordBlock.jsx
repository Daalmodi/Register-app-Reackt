
import { Field,ErrorMessage } from "formik";
const PasswordBlock = () => {
 
  return (  
  <>
    <div className="card">
      <Field
      type="password"
      placeholder="Create your password"
      id="password"
      name="password"
      autoFocus
       />
    </div>
    <ErrorMessage name="password" className="error" component="p"></ErrorMessage>
  </>
  )
}

export default PasswordBlock
