import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Vancouver",
    },
    {
      id: 2,
      title: "Toronto",
    },
    {
      id: 3,
      title: "Kathmandu",
    },
    {
      id: 4,
      title: "Sydney",
    },
    {
      id: 5,
      title: "Tokyo",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          <div className="grid grid-cols-4 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">{city.title}</div>
        </button>
      ))}
    </div>
  );
};
export default TopButtons;
