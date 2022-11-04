import { useEffect, useState } from "react";
import { headingDistanceTo } from "geolocation-utils";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
var dist;

const Drawer0 = (props) => {
  const [wrapperClicked, setWrapperClicked] = useState(false);
  const [show, setShow] = useState(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setShow(
        navigator.geolocation.watchPosition(
          (position) => {
            dist = headingDistanceTo(
              { lat: position.coords.latitude, lng: position.coords.longitude },
              { lat: 38.718956, lng: -9.146467999999999 }
            );
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: Infinity,
          }
        )
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = (e) => {
    setWrapperClicked(!wrapperClicked);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className={`wrapper ${
          wrapperClicked === false ? "slide-down" : "slide-up"
        } ${
          `${Math.floor(dist?.distance)}` > 40
            ? "value-present"
            : "value-absent"
        } `}
      >
        <div className="menu-container">
          <div className="menu-opener">
            <div className="btn">
              <a href="#">
                {wrapperClicked === false ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </a>
              <hr
                style={{
                  width: "80%",
                  color: "white",
                }}
              />
              <div
                onClick={handleClick}
                className={`distance-from-mint ${
                  wrapperClicked === false ? "slide-down" : "slide-up"
                } ${
                  `${Math.floor(dist?.distance)}` > 40
                    ? "value-present"
                    : "value-absent"
                }`}
              >
                <div>
                  {`${Math.floor(dist?.distance)}` > 40 ? (
                    wrapperClicked === false ? (
                      <span style={{ color: "#EF0066" }}>
                        Click Here to Mint
                      </span>
                    ) : (
                      <span>Claim your NFT </span>
                    )
                  ) : (
                    <>
                      {`${Math.floor(dist?.distance)}` > 1000 ? (
                        <span style={{ color: "#EF0066" }}>
                          {`${Math.floor(dist?.distance / 1000)}`} km&nbsp;
                        </span>
                      ) : (
                        <span style={{ color: "#EF0066" }}>
                          {`${Math.floor(dist?.distance)}`} m&nbsp;
                        </span>
                      )}
                      from Breakpoint
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="menu-content-container">
            <div className="clearfix">
              <div className="image">
                {`${Math.floor(dist?.distance)}` > 40 ? (
                  <img
                    className="img2"
                    src="https://nftstorage.link/ipfs/bafybeic2okcpv4xo5qtfovhje3toxaasyb2f4kc4h75tigc7lv3kyx2sh4/0.png"
                    alt="Pineapple"
                  />
                ) : (
                  <img
                    className="img2"
                    src="https://arweave.net/-Z2pjIS5YRPq6iLOCdOPp3VVl50tGdMQRI_RX7NPU-A"
                    alt="Pineapple"
                  />
                )}
              </div>
              <div className="text">
                <section className="name-1">{props.name}</section>
                <section className="name-2">{props.loc}</section>
                <section className="name-3">38.718956,-9.146468</section>
              </div>
            </div>
            <hr style={{ color: "white" }} />
            <div className="Minting">
              {`${Math.floor(dist?.distance)}` > 40 ? (
                <button
                  className="Mint-it"
                  onClick={() => {
                    window.open("https://sage-daifuku-5057eb.netlify.app/");
                  }}
                >
                  Select Wallet
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer0;
