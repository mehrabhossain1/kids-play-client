import axios from "axios";
import { useState, useEffect } from "react";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/toys").then((result) => {
      setToys(result.data);
    });
  }, []);

  return (
    <>
      {/* <h2 className='text-3xl font-bold text-center my-10'>All Toys</h2> */}
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
              {toys.map((toy, index) => (
                <ToyTable key={toy._id} toy={toy} index={index}></ToyTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllToys;
