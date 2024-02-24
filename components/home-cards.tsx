import { cardData } from "@/constant";
import Link from "next/link";



export default function HomeCards() {
  return (
    <section>
      <h1 className="p-6 text-4xl bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Top Picks 🔥</h1>
      {cardData.map((card) => (
        <Link href={card.source}>
          <div
            key={card.id}
            className="card w-fit bg-base-100 my-5 shadow-xl image-full p-6"
          >
            <figure>
              <img src={card.img} alt={card.title} />
            </figure>
            <div className="card-body items-center mt-24 font-bold">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.price}</p>
              <div className="card-actions "></div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
