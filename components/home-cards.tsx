import Link from "next/link";

const cardData = [
  {
    id: 1,
    img: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Quartz",
    price: "Rp. 3.000.000",
    source: "stones/quartz",
  },
  {
    id: 2,
    img: "https://daisyui.com/images/stock/photo-1580587771525-78bca66da95b.jpg",
    title: "Tops!",
    price: "Rp. 3.000.000",
    source: "#",
  },
  {
    id: 3,
    img: "https://daisyui.com/images/stock/photo-1593642532842-ffada4a1afa6.jpg",
    title: "Pants!",
    price: "Rp. 3.000.000",
    source: "#",
  },
];

export default function HomeCards() {
  return (
    <section>
      <h1 className="p-6 text-4xl">Top Picks 🔥</h1>
      {cardData.map((card) => (
        <Link href={card.source}>
          <div
            key={card.id}
            className="card w-fit bg-base-100 my-5 shadow-xl image-full p-6"
          >
            <figure>
              <img src={card.img} alt={card.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.price}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
