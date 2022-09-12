import React, { useState } from "react";
import CardDrinks from "../../components/card-alcoholic/CardDrinks";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";


const Main = () => {
  const [isloading, setIsloading] = useState(false);
  setTimeout(() => {
    setIsloading(true);
  }, 2000);
  if (!isloading) {
    return <Loader />;
  } else {
    return  <div>
     <Navbar/> 
     <CardDrinks />
     </div>
   
  }
};

export default Main;
