import style from "./meteoritescategories.module.css";

export default function MeteoritesCategories() {
  return (
    <section className="bg-white pt-20">
      <div className="container">
        <div className="flex justify-between">
          <h3>Popular meteorite categories</h3>
          <button className="self-end px-4 py-1 text-white bg-black rounded-sm">view all</button>
        </div>
        <ul className="flex justify-between pt-10">
          <li className="flex items-center p-4 px-10 flex-col shadow-2xl rounded w-80">
            <button className="self-end px-4 py-1 text-white bg-black rounded-sm">
              buy
            </button>
            <img
              src="../src/assets/imgs/meteorite-icon.svg"
              className="max-w-24"
              alt=""
            />
            <span>Twisted Shrimp Meteorites</span>
          </li>
          <li className="flex items-center p-4 px-10 flex-col shadow-2xl rounded w-80">
            <button className="self-end px-4 py-1 text-white bg-black rounded-sm">
              buy
            </button>
            <img
              src="../src/assets/imgs/meteorite-icon.svg"
              className="max-w-24"
              alt=""
            />
            <span>Twisted Shrimp Meteorites</span>
          </li>
          <li className="flex items-center p-4 px-10 flex-col shadow-2xl rounded w-80">
            <button className="self-end px-4 py-1 text-white bg-black rounded-sm">
              buy
            </button>
            <img
              src="../src/assets/imgs/meteorite-icon.svg"
              className="max-w-24"
              alt=""
            />
            <span>Twisted Shrimp Meteorites</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
