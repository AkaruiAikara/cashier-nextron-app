const Welcome = ({ name }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-3xl font-semibold">Welcome, {name}</span>
      <span className="text-gray-500">Discover whatever you need easily</span>
    </div>
  );
};

export default Welcome;
