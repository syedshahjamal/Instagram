import React from "react";
import Navbar from "../components/navbar";

const profile = () => {
  return (
    <>
      <Navbar />
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div class="card p-4 bg-secondary">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            <button class="btn btn-secondary">
              <img
                src="https://i.imgur.com/wvxPV9S.png"
                height="100"
                width="100"
              />
            </button>
            <span class="name mt-3">Admin</span>
            <span class="idd">@admin</span>
            <hr />
            <div class="d-flex flex-row justify-content-center align-items-center mt-3">
              <span class="number">
                1069 <span class="follow">Followers</span>
              </span>
            </div>
            <div class=" d-flex mt-2">
              <button class="btn btn-dark">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
