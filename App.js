import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/1000x1000/73/31/food-app-logo-vector-34017331.webp"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div classname="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.foodiesfeed.com%2F&psig=AOvVaw0hth1oSYF1xu5Jxos-kktR&ust=1727803011915000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj-n_iV64gDFQAAAAAdAAAAABAE"
      />
      <h3>Meghna Foods</h3>
      <h4>Biryani, North Indian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container"></div>
      <RestaurantCard />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementbyId("root"));
root.render(<AppLayout/>);
