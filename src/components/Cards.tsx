const Cards = () => {
    const cardData = [
      { id: 1, title: 'Training Courses', count: '1,000+', bgColor: 'bg-red-200' },
      { id: 2, title: 'Online Courses', count: '2,769', bgColor: 'bg-green-200' },
      { id: 3, title: 'Training Courses', count: '500+', bgColor: 'bg-blue-200' },
    ];
  
    return (
      <section className="bg-darkBlue py-16 px-4">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`p-6 rounded-lg shadow-md ${card.bgColor} text-darkBlue`}
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-lg font-medium mt-2">{card.count}</p>
              <p className="mt-2 text-sm">
                The gradual accumulation of information about atomic and small-scale behavior...
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Cards;
  