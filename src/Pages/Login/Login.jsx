import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user) {
          Swal.fire({
            title: "User Login Successfully!",
            icon: "success",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar></Navbar>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              {/* login form */}
              <form onSubmit={handleLogin}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    name='email'
                    type='text'
                    placeholder='email'
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    name='password'
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                  />
                  <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className='form-control mt-6'>
                  <input
                    className='btn btn-primary'
                    type='submit'
                    value='Login'
                  />
                </div>
              </form>

              {/* google login */}
              <div className='divider'>OR</div>

              <button className='btn btn-circle btn-outline mx-auto'>G</button>

              <p className='my-4 text-center'>
                Do not Have An Account? Please{" "}
                <Link className='text-orange-500 font-bold' to='/signUp'>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
