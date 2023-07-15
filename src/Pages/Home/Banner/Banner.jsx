const Banner = () => {
  return (
    <div className='carousel w-full h-[600px]'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img
          src={
            "https://www.shutterstock.com/image-vector/toy-store-assortment-showcase-window-600w-1963867192.jpg"
          }
          className='w-full rounded-xl'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img
          src='https://www.shutterstock.com/image-vector/robot-look-out-corner-poster-600w-770251675.jpg'
          className='w-full rounded-xl'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img
          src='https://www.shutterstock.com/image-vector/robots-flat-vector-illustrations-set-600w-1536821945.jpg'
          className='w-full rounded-xl'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='carousel-item relative w-full'>
        <img
          src='https://www.shutterstock.com/image-photo/old-classic-tin-toy-robots-600w-615371489.jpg'
          className='w-full rounded-lg'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
