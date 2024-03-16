/* eslint-disable react/prop-types */
import { MdAccessTime } from "react-icons/md";
import { FaFire } from "react-icons/fa";
const Card = ({ recipe }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div className="text-left border-2 rounded-2xl">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="w-full h-64">
          <img src={recipe_image} alt="recipe image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-left">{short_description}</p>
          <div className="divider"></div>
          {/* ingredients */}
          <div className="h-40 overflow-y-auto">
            <h2 className="text-xl font-bold">Ingredients: </h2>
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </div>
          <div className="flex gap-6">
            <p className="flex gap-2 items-center">
              <MdAccessTime /> {preparing_time} minutes
            </p>
            <p className="flex gap-2 items-center"><FaFire />{calories} calories</p>
          </div>
          <div className="card-actions ">
            <button className="btn btn-error text-white">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
