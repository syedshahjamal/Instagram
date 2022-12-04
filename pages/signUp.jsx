import Navbar from '../components/navbar'
import { Form } from 'react-bootstrap';

import styles from "../styles/signUp.module.css"

function Signup(){
    return(
        <>
        <Navbar/>

        <div className={styles.formContainer}>
        <Form className={styles.form}>
          <div className={styles.formContent}>
          <h3 >Sign Up</h3>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center mt-2">
            Already Have Account? <a href="Auth/login">Sign In</a>
          </p>
        </div>
      </Form>
      </div>
        
       
        </>
        
    )

}

export default Signup;