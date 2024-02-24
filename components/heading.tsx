import Typewriter from "typewriter-effect";

export default function Heading() {
  const TEXT = `Experience the Magic of Crystal Stone" - Browse our top-quality Crystal
        Stone products, get informed with interesting facts and uses, and
        benefit from excellent customer support. Immerse yourself in the
        enchanting world of Crystal Stone.`;
  return (
    <div>
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content text-7xl font-black grid place-content-center text-center">
            Original Stones.
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-7xl font-black grid place-content-center text-center ">
            Wolang Watu
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>

      <section className="p-6 text-2xl">
        <div className="tracking-wide">
          <Typewriter
            options={{
              strings: TEXT,
              autoStart: true,
              delay: 10,
            }}
          />
        </div>

        <div className="flex justify-center ">
          <button className="btn btn-primary mt-6 font-bold ">Read More</button>
        </div>
      </section>
    </div>
  );
}
