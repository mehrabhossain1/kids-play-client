const Gallery = () => {
  return (
    <>
      <h2 className='text-5xl text-center font bold my-10'>Gallery Section</h2>
      <div className='grid grid-cols-3'>
        <div className='card w-96 glass'>
          <figure>
            <img
              src='https://m.media-amazon.com/images/I/7139FuqxgjL.jpg'
              alt='car!'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Astro Bot</h2>
            <p>How to park your car at your garage?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Learn now!</button>
            </div>
          </div>
        </div>
        <div className='card w-96 glass'>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=510&q=80'
              alt='car!'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Mech Buddy</h2>
            <p>How to park your car at your garage?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Learn now!</button>
            </div>
          </div>
        </div>
        <div className='card w-96 glass'>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1549512329-31d4e8831543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
              alt='car!'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Maxxi</h2>
            <p>How to park your car at your garage?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
