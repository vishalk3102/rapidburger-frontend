import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        toast.success("Added to cart");
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        toast.success("Added to cart");
        break;
      case 3:
        dispatch({ type: "burgerWithFriesIncrement" });
        toast.success("Added to cart");
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        toast.success("Added to cart");
        break;
    }
  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={80}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={100}
          title="Veg Cheese Burger"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={150}
          title="Cheese Burger with French Fries"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
