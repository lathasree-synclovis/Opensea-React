import react from "react";
import NFT from "../components/NFT";
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";



const Home = () => {


  return (
    <div id="home">
      <NFT list={hotDropsData} />   
    </div>
  );
};

export default Home;
