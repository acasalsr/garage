export default function Garage({ carsGarage }) {
  console.log(carsGarage.length);
  return (
    <>
      {carsGarage.length > 0 ? (
        <p>You have {carsGarage.length} cars</p>
      ) : (
        <p>You have to buy a car</p>
      )}
    </>
  );
}
