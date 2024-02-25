import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopList = () => {
  const [topHotels, setTopHotels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/hotel/tophotels")
      .then((response) => {
        setTopHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching top hotels: ", error);
      });
  }, []);

  return (
    <div className="bg-white -mt-40">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {topHotels.map((hotel) => (
            <div key={hotel._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={hotel.image_url}
                  alt={hotel.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/checkout/${hotel._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {hotel.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{hotel.location}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  <Link to={`/checkout/${hotel._id}`}>
                    <button className="px-3 py-3 text-white transition-colors duration-200 rounded-lg bg-red-500">
                      Book
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopList;
