import React from 'react';

const Home = ({ isLoggedIn }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-3xl h-full">
      <h1>Welcome to the Home Page</h1>
      <h2>{isLoggedIn ? "You are logged in. Access the dashboard from here." : "Please login to access the dashboard."}</h2>
    </div>
  );
};

export default Home;
