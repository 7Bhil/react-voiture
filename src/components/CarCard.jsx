// CarCard.jsx
export default function CarCard() {
  // Données statiques pour éviter la page blanche
  const car = [
    { model: "Toyota Corolla", price: "25 000", image: "bh" },
    { model: "Peugeot 3008", price: "35 000", image: "bh" },
    { model: "Hyundai Tucson", price: "40 000", image: "bh" },
  ];


  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white m-2">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/300x200?text=Voiture";
        }}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{car.model}</h3>
        <p className="text-gray-700">{car.price} FCFA/jour</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Réserver
        </button>
      </div>
    </div>
  );
}
