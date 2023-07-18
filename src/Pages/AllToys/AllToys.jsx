import axios from "axios";
import { useState, useEffect } from "react";
import ToyTable from "./ToyTable";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/toys").then((result) => {
      setToys(result.data);
    });
  }, []);

  const defaultLimit = 20;

  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar></Navbar>
      <h2 className='text-3xl font-bold text-center my-10'>All Toys</h2>
      <div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              {toys.slice(0, defaultLimit).map((toy, index) => (
                <ToyTable key={toy._id} toy={toy} index={index}></ToyTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllToys;
