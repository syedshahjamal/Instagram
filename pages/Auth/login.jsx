import Navbar from "../../components/navbar";
import { Form } from "react-bootstrap";
import styles from "../../styles/Login.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";
import {useRouter} from "next/router"
function Login() {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    // console.log(res)
    if(res){
      router.push("/home")
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.formContainer}>
        <Form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formContent}>
            <h3>Sign In</h3>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={userInfo.email}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, email: e.target.value });
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={userInfo.password}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, password: e.target.value });
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-3">
              Don't have Account? <a href="/signUp">Create Account</a>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
}
export default Login;
