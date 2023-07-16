import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  return (
    <div className='w-1/2 mx-auto'>
      <Tabs>
        <TabList>
          <Tab>Programmable Robots</Tab>
          <Tab>Remote-Controlled Robots</Tab>
          <Tab>Transforming Robots</Tab>
        </TabList>

        {/* programmable robots */}
        <TabPanel>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://www.shutterstock.com/image-photo/vintage-tin-robot-toy-isolated-600w-1206408271.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Name
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <button className='btn btn-primary'>View Details</button>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Rating</div>
              </div>
            </div>
          </div>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWy4BlWa3xn8GBaSADCiK4wXqD9Ftzf6pxXKg02O4HBJ73BtOKUjBl9VNOpAFOuj7f10&usqp=CAU'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Name
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <button className='btn btn-primary'>View Details</button>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Rating</div>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Remote-Controlled Robots */}
        <TabPanel>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://images-na.ssl-images-amazon.com/images/I/61BJPcCUHSL._AC_SL1100_.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Name
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <button className='btn btn-primary'>View Details</button>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Rating</div>
              </div>
            </div>
          </div>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://m.media-amazon.com/images/I/71gw6P-+KcL.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Name
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <button className='btn btn-primary'>View Details</button>
              <div className='card-actions justify-end'>
                <div className='badge badge-outline'>Rating</div>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Transforming Robots */}
        <TabPanel>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://m.media-amazon.com/images/I/81GzHuzzg8L.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Name
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <button className='btn btn-primary'>View Details</button>
              <div className='card-actions justify-between'>
                <div className='badge badge-outline'>Rating</div>
              </div>
            </div>
          </div>
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img
                src='https://m.media-amazon.com/images/I/81f3yA-TnWL.jpg'
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                Name
                <div className='badge badge-secondary'>NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>

              <div className='card-actions justify-between'>
                <button className='btn btn-primary '>View Details</button>
                <div className='badge badge-outline'>Rating</div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
