import * as Yup from 'yup';
export const signUpSchema=Yup.object().shape({
    userName: Yup.string().required("User  Name is required"),
    email: Yup.string().email("Enter a valid Email").required("Email is required"),
    password: Yup.string().min(8,"Password must be at least 8 characters").matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,"Pasword is not valid (lower, upper ,nums, symbols)").required("Password is required"),
});