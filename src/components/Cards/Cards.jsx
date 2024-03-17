import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";

const Cards = () => {
  const [recipes, setRecipes] = useState([]);
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    if (sidebar.includes(recipe)) {
      toast("This recipe is already selected, try some other ones :D");
    } else {
      const newSidebar = [...sidebar, recipe];
      console.log("recipe clicked", recipe);
      setSidebar(newSidebar);
    }
  };

  return (
    <section className="mt-16 text-center min-h-screen">
      <h2 className="text-3xl font-bold ">Our Recipes</h2>
      <p className="text-base font-normal max-w-2xl mx-auto mt-4 text-[#150B2B99]">
        Delve into our recipe section and uncover a treasure trove of culinary
        inspiration. From tantalizing appetizers to delectable desserts, our
        curated collection offers something to satiate every craving and ignite
        your passion for cooking.
      </p>
      <div className=" lg:flex justify-between gap-4 mt-6">
        {/* cards */}
        <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {recipes.map((recipe, idx) => (
            <Card
              handleWantToCook={handleWantToCook}
              key={idx}
              recipe={recipe}
            ></Card>
          ))}
        </div>
        <div className="border-2 rounded-xl lg:w-2/5 p-4">
          <Sidebar sidebar={sidebar}></Sidebar>
        </div>
      </div>
    </section>
  );
};

export default Cards;
