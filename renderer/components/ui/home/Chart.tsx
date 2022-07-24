import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60],
  },
];

const trxs = [
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
  {
    id: "UD023JVFGG944TJVO4",
    value: 196.306,
    date: "2020-01-01",
  },
];

const Chart = ({ type }) => {
  return (
    <div className="bg-white p-8 rounded-xl my-8">
      <div className="text-xl mb-8">Last week transactions</div>
      <div className="flex flex-row justify-between">
        {typeof window !== "undefined" && (
          <ApexChart
            options={options}
            series={series}
            type={type}
            width={768}
            height={320}
          />
        )}
        <div className="h-320px overflow-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {trxs.map((trx, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {trx.id}
                  </th>
                  <td className="py-4 px-6">{trx.date}</td>
                  <td className="py-4 px-6">{trx.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chart;
