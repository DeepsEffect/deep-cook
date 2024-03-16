const Cards = () => {
    return (
        <section className="mt-16 text-center min-h-screen">
            <h2 className="text-3xl font-bold ">Our Recipes</h2>
            <p className="text-base font-normal max-w-2xl mx-auto mt-4">Delve into our recipe section and uncover a treasure trove of culinary inspiration. From tantalizing appetizers to delectable desserts, our curated collection offers something to satiate every craving and ignite your passion for cooking.</p>
            <div className=" border border-red-500 flex justify-between mt-6">
                {/* cards */}
                <div className="border border-green-500 h-[500px] w-3/5">
                    <h2>card</h2>
                </div>
                <div className="border border-yellow-400 overflow-hidden w-2/5">
                    <h2>Want to cook</h2>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default Cards;