import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toy = useLoaderData();
  console.log(toy);
  return (
    <div>
      <h2>this is single toy</h2>
    </div>
  );
};

export default SingleToy;
