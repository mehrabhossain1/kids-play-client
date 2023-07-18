import { useContext } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (e) => {
    e.preventDefault();

    const form = e.target;
    const picture = form.picture.value;
    const toy_name = form.toy_name.value;
    const seller_name = form.seller_name.value;
    const seller_email = user?.email;
    const sub_category = form.sub_category.value;
    const price = form.price.value;
    const available_quantity = form.available_quantity.value;
    const detail = form.detail.value;
    const rating = form.rating.value;

    const toyData = {
      picture,
      name: toy_name,
      seller_name,
      seller_email,
      subcategory: sub_category,
      price,
      quantity: available_quantity,
      description: detail,
      rating,
    };

    console.log(toyData);

    axios.post("http://localhost:5000/myToys", toyData).then((result) => {
      console.log(result.data);
      if (result.data.insertedId) {
        Swal.fire("Toy Added to database successfully");
        form.reset();
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2 className='text-3xl font-bold text-center'>Add Your Toy</h2>
      <form onSubmit={handleAddToy}>
        <div className='hero min-h-screen bg-base-200'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div className='card  w-full shadow-2xl bg-base-100'>
              <div className='card-body grid grid-cols-2'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Picture </span>
                  </label>
                  <input
                    name='picture'
                    type='text'
                    placeholder=''
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Toy Name</span>
                  </label>
                  <input
                    name='toy_name'
                    type='text'
                    placeholder=''
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control '>
                  <label className='label'>
                    <span className='label-text'>Seller Name </span>
                  </label>
                  <input
                    name='seller_name'
                    type='text'
                    placeholder=''
                    defaultValue={user?.displayName}
                    className='input input-bordered'
                    readOnly
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Seller Email</span>
                  </label>
                  <input
                    name='seller_email'
                    type='email'
                    defaultValue={user?.email}
                    placeholder=''
                    className='input input-bordered'
                    readOnly
                  />
                </div>
                <div className='form-control '>
                  <label className='label'>
                    <span className='label-text'>Sub-Category</span>
                  </label>
                  <input
                    name='sub_category'
                    type='text'
                    placeholder=''
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Price</span>
                  </label>
                  <input
                    name='price'
                    type='text'
                    placeholder=''
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control '>
                  <label className='label'>
                    <span className='label-text'>Available Quantity</span>
                  </label>
                  <input
                    name='available_quantity'
                    type='text'
                    placeholder=''
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Detail</span>
                  </label>
                  <input
                    name='detail'
                    type='text'
                    placeholder=''
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Rating</span>
                  </label>
                  <input
                    name='rating'
                    type='text'
                    placeholder=''
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control mt-6'>
                  <input
                    className='btn btn-primary'
                    type='submit'
                    value='Add Toy'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddToy;
