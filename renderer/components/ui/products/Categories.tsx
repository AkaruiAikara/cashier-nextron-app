import { GiElectric } from "react-icons/gi";

const categories = [
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
  {
    name: "Electronics",
    total: 98,
    icon: <GiElectric size={20} />,
  },
];

const Categories = () => {
  return (
    <div className="overflow-y-auto flex flex-row gap-4 my-12 py-2">
      {categories.map((category, index) => (
        <button
          key={index}
          className="flex flex-row items-center justify-between gap-4 bg-white rounded-lg p-4 group hover:(bg-teal-500) transition-colors duration-200"
        >
          <div className="flex justify-center items-center bg-gray-100 rounded w-12 h-12 group-hover:(bg-white text-teal-500)">
            {category.icon}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-varela font-semibold text-teal-700 group-hover:(text-white)">
              {category.name}
            </span>
            <span className="text-xs text-left text-gray-500 group-hover:(text-gray-200)">
              {category.total} items
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Categories;
