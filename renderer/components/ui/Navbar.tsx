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
  console.log(router);

  return (
    <div className="sticky flex flex-col justify-between items-center h-screen w-14 px-8">
      <span className="font-varela font-semibold text-2xl pt-6 text-teal-700">
        Dfy
      </span>
      <div className="flex flex-col gap-2">
        {icons.map((icon, index) => (
          <button
            key={index}
            className={`flex justify-center items-center w-12 h-12 rounded-lg hover:(bg-teal-100 text-teal-500) transition-colors duration-200 ${
              router.pathname.startsWith(icon.url)
                ? "bg-teal-200 text-teal-600"
                : "text-gray-400"
            }`}
          >
            {icon.icon}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2 mb-6">
        {icons2.map((icon, index) => (
          <button
            key={index}
            className="flex justify-center items-center w-12 h-12 rounded-lg hover:(bg-teal-100 text-teal-500) transition-colors duration-200 text-gray-400"
          >
            {icon.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
