/* eslint-disable react/prop-types */
import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";
const Card = ({ recipe, handleWantToCook }) => {
  const {
    // recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div className="text-left border-2 rounded-xl ">
      <div className="card bg-base-100 shadow-xl p-4">
        <figure className="w-full h-64">
          <img className="rounded-xl w-full h-full object-cover" src={recipe_image} alt="recipe image"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-left font-fira text-[#150B2B99] h-14">{short_description}</p>
          <div className="divider"></div>
          {/* ingredients */}
          <div className="h-40 overflow-y-auto">
            <h2 className="text-xl font-bold mb-2">Ingredients: </h2>
            {ingredients.map((ingredient, idx) => (
              <li className="font-fira text-[#150B2B99] " key={idx}>{ingredient}</li>
            ))}
          </div>
          <div className="flex gap-6 text-[#150B2B99] font-fira mb-4">
            <p className="flex gap-2 items-center">
              <MdAccessTime /> {preparing_time} minutes
            </p>
            <p className="flex gap-2 items-center">
              <FaFire />
              {calories} calories
            </p>
          </div>
          <div className="card-actions ">
            <button
              onClick={() => handleWantToCook(recipe)}
              className="btn btn-error text-white rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
