const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div className="card card-container">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/sotxv0gury7f7vrfvb2r"
        className="card-img-top "
      />
      <div className="card-body">
        <h5 className="card-title">{resName}</h5>
        <p className="card-text">{cuisine}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
