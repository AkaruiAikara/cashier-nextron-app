import Image from "next/image";

const Cards = () => {
  const cards = [
    {
      title: "Daily Transactions",
      description: "See all your transactions on last 24 hours",
      image: "/images/bill.png",
      value: 0,
    },
    {
      title: "Montly Transactions",
      description: "See all your transactions on last 30 days",
      image: "/images/invoice.png",
      value: 0,
    },
    {
      title: "Total Products",
      description: "See all your products in the system",
      image: "/images/product.png",
      value: 0,
    },
    {
      title: "Best Product",
      description: "See the best product in the system",
      image: "/images/best-badge.png",
      value: 0,
    },
  ];
  return (
    <div className="flex flex-row gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-row items-start justify-between min-w-60 w-80 bg-white rounded-xl p-4"
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col">
              <span className="font-medium text-xl underline">
                {card.title}
              </span>
              <span className="text-gray-400 text-xs max-w-48">
                {card.description}
              </span>
            </div>
            <span className="text-2xl font-semibold">0</span>
          </div>
          <Image
            src={card.image}
            alt="Bill"
            width={72}
            height={72}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
