/* eslint-disable react/prop-types */
const CurrentlyCooking = ({ cooking }) => {
  let totalTime = 0;
  let totalCalories = 0;

  cooking.forEach((recipe) => {
    totalTime += recipe.preparing_time;
    totalCalories += recipe.calories;
  });

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">
        Currently Cooking: {cooking.length}
      </h2>
      <table className="w-full mt-4 overflow-x-auto lg:overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 rounded-tl-xl">Name</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Calories</th>
            <th className="px-4 py-2 rounded-tr-xl"></th>
          </tr>
        </thead>
        <tbody>
          {cooking.map((recipe, idx) => (
            <tr
              className="bg-gray-100 text-xs lg:text-base font-fira"
              key={idx}
            >
              <td className="px-4 py-4 rounded-l-xl">{recipe.recipe_name}</td>
              <td className="px-4 py-4">{recipe.preparing_time} minutes</td>
              <td className="px-4 py-4">{recipe.calories} calories</td>
              <td className="px-4 py-4 rounded-r-xl"></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* counting total time and calories */}
      <div className="mt-4 text-xl font-medium text-[#282828CC]">
        <h2>Total Time: {totalTime} minutes</h2>
        <h2>Total Calories: {totalCalories} calories</h2>
      </div>
    </div>
  );
};

export default CurrentlyCooking;
