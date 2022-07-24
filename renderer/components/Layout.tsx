import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <Navbar />
      <main className="bg-slate-100 font-varela w-full overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
