import react from "react";
import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import '../styles/Explore.css';
const Explore = () => {
  return (
    <div id="explore">
      <div id="list-container">
        <h2>Explore Collection</h2>
        <CardList list={exploreList} />
      </div>
    </div>
  );
};

export default Explore;
