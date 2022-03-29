import React from "react";
import AnftDrops from "../../components/anftDrops/anftDrops";
import BlogPosts from "../../components/blogPosts/blogPosts";
import BrowseCategories from "../../components/browseCategories/browseCategories";
import Introduction from "../../components/introduction/introduction";
import LiveAuctions from "../../components/liveAuctions/liveAuctions";
import TopSellers from "../../components/topSellers/topSellers";
import WalletOptions from "../../components/walletOptions/walletOptions";
import "./homeScreen.css";

const HomeScreen=()=> {
  return (
    <div>
      <div className='col-11 col-sm-10 center'>
        <Introduction/>
      </div>
      
      <div className="details">
        <div className='col-11 col-sm-10 col-md-10 center'>
          <WalletOptions/>
          <LiveAuctions/>
          <BrowseCategories/>
          <TopSellers/>
          <AnftDrops/>
          <BlogPosts/>
        </div>
        
      </div>
    </div>
  );
}

export default HomeScreen;
