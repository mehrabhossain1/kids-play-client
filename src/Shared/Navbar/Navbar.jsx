const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img
          className='h-16 w-28 rounded-lg'
          src={
            "https://img.freepik.com/premium-vector/minimalist-modern-kids-toy-simple-flat-icon-logo-template-vector-illustration-design-children-education-by-montessori-system-logo-concept_534135-459.jpg"
          }
          alt=''
        />
        <a className='btn btn-ghost normal-case text-xl'>Kids Play</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>All Toys</a>
          </li>
          <li>
            <a>My Toys</a>
          </li>
          <li>
            <a>Add A Toy</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>User Profile Pic</a>
      </div>
    </div>
  );
};

export default Navbar;
