const Register = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Register!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your Name</span>
              </label>
              <input
                name='name'
                type='text'
                placeholder='Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                name='email'
                type='text'
                placeholder='Email'
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
                placeholder='Password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input
                name='photo'
                type='text'
                placeholder='Photo URL'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary'>Register</button>
            </div>

            <p>Do not Have An Account? Please Login!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
