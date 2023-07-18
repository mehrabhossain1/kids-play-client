import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='w-[1000px] mx-auto'>
        <h2 className='text-2xl'>
          Q-1: What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p>
          Ans: The access token is re-issued, provided the refresh token is a
          valid one requesting permission to access confidential resources and A
          refresh token just helps you re-validate a user without them having to
          re-enter their login credentials multiple times.
        </p>
        <h2 className='text-2xl'>Q-2: Compare SQL and NoSQL databases?</h2>
        <p>
          Ans: SQL database is Structured in a table format and NoSQL is
          Structured in json format.
        </p>
        <h2 className='text-2xl'>Q-3: What is express js? What is Nest JS?</h2>
        <p>
          Ans: Express Js is a node js framework. NestJS is a newer framework
          that provides additional features such as dependency injection, a
          modular architecture, and an intuitive CLI.
        </p>
        <h2 className='text-2xl'>
          Q-4: What is MongoDB aggregate and how does it work?
        </h2>
        <p>
          Ans: Aggregation operations group values from multiple documents
          together, and can perform a variety of operations on the grouped data
          to return a single result.
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
