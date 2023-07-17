import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const SingleToy = () => {
  const toy = useLoaderData();
  console.log(toy);

  const { name, picture, seller_name, seller_email, price, quantity,description,rating } = toy;

  return (
    <div>
      <Navbar></Navbar>
      <div className='card card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={picture} alt='Movie' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <p>Seller Name: {seller_name}</p>
          <p>Seller Email: {seller_email}</p>
          <p>Price: ${price}</p>
          <p>Available Quantity: {quantity}</p>
          <p>Description: {description}</p>
          <p>Rating: {rating}</p>
         
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleToy;
