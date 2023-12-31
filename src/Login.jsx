import { useNavigate } from "react-router-dom"
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';


function Login() {
    const navigate= useNavigate();
    const clickRegister= () => navigate('./Register')
    return (
    <>
        <form>
        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
        <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
        <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

        <MDBRow className='mb-4'>
            <MDBCol className='d-flex justify-content-center'>
            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked  />
            </MDBCol>
            <MDBCol>
            <a href=''>Forgot password?</a>
            </MDBCol>
        </MDBRow>

        <MDBBtn type='submit' className='mb-4' block>
            Sign in
        </MDBBtn>

        <div className='text-center'>
            <p>
            Not a member? <a href='' onClick={clickRegister}>Register</a>
            </p>
            <p>or sign up with:</p>

            <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='google' />
            </MDBBtn>

            <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='github' />
            </MDBBtn>
        </div>
        </form>

    </>
    

  )
}

export default Login