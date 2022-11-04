import { useRouter } from "next/router";
import React from "react";
import ActiveMintsNavbar from "../components/ActiveMintsNavbar/ActiveMintsNavb";

const Instructions = () => {
  const navigate = useRouter();
  return (
    <>
      <ActiveMintsNavbar name="proto" />
      <div className="ins">
        <div className="list">
          <p>
            Welcome to the proto GeoNFT app. Please read the instructions below
            carefully,
          </p>
          <ol>
            <li>
              {" "}
              The app is acessible on all mobile browsers, however we recommend
              using Brave/Safari.
            </li>
            <li>
              {" "}
              For iOS users, we recommend using the app on Safari with the Glow
              wallet extension enabled.
            </li>
            <li>
              {" "}
              Please allow the app to access your location to proceed with
              minting.
            </li>
            <li>
              {" "}
              We also support Solflare, Torus and Walletconnect enabled wallets.
            </li>
            <li>
              {" "}
              If you would like to use an in wallet browser, we recommend using
              Solflare.
            </li>
            <li>
              {" "}
              Please allow the app sufficient time to read your location, this
              might take a few seconds.
            </li>
          </ol>
          Give us a shoutout on twitter{" "}
          <a
            onClick={() => {
              window.open("https://twitter.com/de_planDAO");
            }}
          >
            @de_planDAO
          </a>{" "}
          & reach out. With that set, LFG! <span>🚀🚀</span>
          <br />
          <br />
          <div className="maps">
            <button
              className="tomap"
              onClick={() => navigate.push("/CardsList")}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
