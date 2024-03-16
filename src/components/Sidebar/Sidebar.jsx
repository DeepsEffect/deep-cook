/* eslint-disable react/prop-types */
const Sidebar = ({ sidebar }) => {
  return (
    <div>
      <h2>Want to cook: {sidebar.length}</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2 rounded-tl-xl">Name</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Calories</th>
            <th className="px-4 py-2 rounded-tr-xl"></th>
          </tr>
        </thead>
        <tbody className="">
          {sidebar.map((item, idx) => (
            <tr
              className="bg-gray-200 mt-10"
              key={idx}
              style={{ marginBottom: "10px" }}
            >
              <td className="px-4 py-2 rounded-l-xl">{item.recipe_name}</td>
              <td className="px-4 py-2">{item.preparing_time} minutes</td>
              <td className="px-4 py-2">{item.calories} calories</td>
              <td className="px-4 py-2 rounded-r-xl">
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
