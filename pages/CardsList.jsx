import ActiveMintsNavbar from "../components/ActiveMintsNavbar/ActiveMintsNavb";
import { useRouter } from "next/router";
const CardList = () => {
  const navigate = useRouter();
  return (
    <>
      <ActiveMintsNavbar name="Active Mints" />
      <div className="card-list">
        <div className="container">
          <div className="img-container">
            <div className="border-2">
              <img src="https://nftstorage.link/ipfs/bafybeibsbjxecuy25cam3xv3v4qzsmzhym6bpispl7onccr6zmbylqfxs4/1.png" />
            </div>
          </div>
          <div className="details">
            <div className="event">Solana Breakpoint</div>
            <div className="location">Lisbon, Portugal</div>
            <div className="venue">Teatro Capitolio, Parque Mayer, Lisboa</div>
            <div className="to-map1">
              <button
                className="map"
                onClick={() => {
                  navigate.push("/Map0");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="img-container">
            <div className="border-2">
              <img src="https://nftstorage.link/ipfs/bafybeibsbjxecuy25cam3xv3v4qzsmzhym6bpispl7onccr6zmbylqfxs4/2.png" />
            </div>
          </div>
          <div className="details">
            <div className="event">ReFi Lisbon</div>
            <div className="location">Lisbon, Portugal</div>
            <div className="venue">Rua de Cascais, n.º 57</div>
            <div className="to-map2">
              <button
                className="map"
                onClick={() => {
                  navigate.push("/Map1");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
