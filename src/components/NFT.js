import React, { useState, useEffect } from "react";
import "../styles/Nft.css";
import { useNavigate } from "react-router-dom";

const NFT = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };
  const goCreate = () => {
    navigate("/create");
  };

  return (
    <div id="nft">
      {/* <img id='hero-background' src={list[0].src}/> */}
      <h1 id="header-text-first"> Discover,collect and sell extraoridinary NFT's </h1>
      <h5 id="header-subtext">OpenSea is the world's first and largest NFT marketplace</h5>
      <div id="nf-buttons">
        <button id="explore" onClick={goExplore}>
          Explore
        </button>
        <button id="create" onClick={goCreate}>Create</button>
      </div>
    </div>
  );
};

export default NFT;
