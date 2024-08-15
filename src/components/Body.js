import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="container">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biriyani, North Indian, Asian"
        />
      </div>
    </div>
  );
};

export default Body;
