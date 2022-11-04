import { useRouter } from "next/router";
import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

function ActiveMintsNavbar(props) {
  const navigate = useRouter();
  return (
    <div className="nav1">
      <div className="nav-header1">
        <div className="nav-title1">
          <button
            className="btn-back1"
            onClick={() => {
              navigate.push("/CardsList");
            }}
          >
            <MdOutlineArrowBackIos />
          </button>
          &nbsp;{props.name}
        </div>
      </div>
    </div>
  );
}

export default ActiveMintsNavbar;
