import CarGrid from '../components/Sections/CarGrid';

const Cars = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">Notre flotte complète</h1>
        <CarGrid title="Tous nos véhicules" showFilters={true} />
      </div>
    </div>
  );
};

export default Cars;