/* eslint-disable react/prop-types */
const Sidebar = ({ sidebar }) => {
  return (
    <div className="hidden lg:flex lg:flex-col">
      <h2 className="text-2xl font-bold">Want to cook: {sidebar.length}</h2>
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
          {sidebar.map((item, idx) => (
            <tr
              className="bg-gray-100 text-xs lg:text-base font-fira"
              key={idx}
            >
              <td className="px-4 py-4 rounded-l-xl">{item.recipe_name}</td>
              <td className="px-4 py-4">{item.preparing_time} minutes</td>
              <td className="px-4 py-4">{item.calories} calories</td>
              <td className="px-4 py-4 rounded-r-xl">
                <button className="btn btn-error text-white rounded-full">
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;
