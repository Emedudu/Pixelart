import React from "react";
import BrowseCategories from "../../components/browseCategories/browseCategories";
import Introduction from "../../components/introduction/introduction";
import LiveAuctions from "../../components/liveAuctions/liveAuctions";
import WalletOptions from "../../components/walletOptions/walletOptions";
import "./homeScreen.css";

const HomeScreen=()=> {
  return (
    <div className="introDetails">
      <Introduction/>
      <div className="details ">
        <WalletOptions/>
        <LiveAuctions/>
        <BrowseCategories/>
      </div>
    </div>
  );
}

export default HomeScreen;
