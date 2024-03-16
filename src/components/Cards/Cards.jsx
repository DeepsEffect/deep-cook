import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <section className="mt-16 text-center min-h-screen">
            <h2 className="text-3xl font-bold ">Our Recipes</h2>
            <p className="text-base font-normal max-w-2xl mx-auto mt-4">Delve into our recipe section and uncover a treasure trove of culinary inspiration. From tantalizing appetizers to delectable desserts, our curated collection offers something to satiate every craving and ignite your passion for cooking.</p>
            <div className=" border border-red-500 flex justify-between mt-6">
                {/* cards */}
                <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {
                        recipes.map((recipe, idx) => <Card key={idx} recipe={recipe}></Card>)
                    }
                </div>
                <div className="border border-yellow-400 overflow-hidden w-full lg:w-2/5">
                    <h2>Want to cook</h2>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default Cards;