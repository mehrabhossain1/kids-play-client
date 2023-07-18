import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate([]);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <img
        className='flex h-screen w-1/2 justify-center items-center'
        src='https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg'
        alt='Error 404'
      />
      <button onClick={handleBackToHome} className='btn btn-error'>
        Back to Home
      </button>
    </div>
  );
};

export default Error;
