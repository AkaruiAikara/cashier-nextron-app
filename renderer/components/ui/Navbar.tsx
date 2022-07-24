import { useRouter } from "next/router";
import { HiHome, HiViewGrid, HiUserCircle } from "react-icons/hi";
import { MdCategory, MdHistory, MdOutlineLogout } from "react-icons/md";

const icons = [
  {
    name: "Home",
    icon: <HiHome size={20} />,
    url: "/home",
  },
  {
    name: "Product",
    icon: <HiViewGrid size={20} />,
    url: "/product",
  },
  {
    name: "Category",
    icon: <MdCategory size={20} />,

    url: "/category",
  },
  {
    name: "Transaction",
    icon: <MdHistory size={20} />,
    url: "/transaction",
  },
];

const icons2 = [
  {
    name: "Profile",
    icon: <HiUserCircle size={20} />,
    url: "/profile",
  },
  {
    name: "Logout",
    icon: <MdOutlineLogout size={20} />,
    url: "/logout",
  },
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 flex flex-col justify-between items-center h-screen max-h-screen w-14 group hover:w-56 transform-gpu transition-all duration-300 ease-in-out px-8">
      <span className="font-varela font-semibold text-2xl pt-6 text-teal-700">
        D.fy
      </span>
      <div className="flex flex-col gap-2">
        {icons.map((icon, index) => (
          <button
            key={index}
            className={`flex justify-center items-center w-12 h-12 rounded-lg hover:(bg-teal-100 text-teal-500) group-hover:(w-52 justify-start gap-4 px-4) transition-all duration-200 ${
              router.pathname.startsWith(icon.url)
                ? "bg-teal-200 text-teal-600"
                : "text-gray-400"
            }`}
          >
            {icon.icon}
            <span className="hidden w-0 group-hover:(block w-auto)">
              {icon.name}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2 mb-6">
        {icons2.map((icon, index) => (
          <button
            key={index}
            className="flex justify-center items-center w-12 h-12 rounded-lg hover:(bg-teal-100 text-teal-500) group-hover:(w-52 justify-start gap-4 px-4) transition-all duration-200 text-gray-400"
          >
            {icon.icon}
            <span className="hidden w-0 group-hover:(block w-auto)">
              {icon.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
