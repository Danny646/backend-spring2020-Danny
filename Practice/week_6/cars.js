class car extends vehicle.vehicle("Honda", "Red", "150");
console.log(newCar);
 constructor(manufacturer, model, color, fuelType, fuelCapacityGallons, mpg, topSpeedMPH, seats)  {
   // super calls the parent's constructor when we build a car object.
  super(manufacturer,color,topSpeedMPH);
  this.seats = seats;
  this.fuelType = fuelType;
  this.maxTankGallons = fuelCapacityGallons;
  this. fuelCapacityGallons = fuelCapacityGallons /2;
  this.license= license;
  this.model = model;
  this.mpg = mpg;
  }
setLicense(licenseNumber) {
  this.license = licenseNumber;
  console.log(`The license of the ${this.manufacturer} ${this.model} was updated to ${licenseNumber}`);
    }
range() {
console.log('The license of the ${this.manufafturer} $this.model} can go a total of${'
(this.fuelCapacityGallons * this.mpg}} miles before refueling.);
}

travel(distanceToTravelMiles) {
  let gallonsToBurn = distanceToTravelMiles / this.mpg;

  if (gallonsToBurn <= this.currentTankGallons) {
      console.log(`${this.manufacturer} ${this.model} has traveled ${distanceToTravelMiles} miles.`);

      this.currentTankGallons = this.currentTankGallons - gallonsToBurn;
  } else {
      console.log(`${this.manufacturer} ${this.model} cannot go that far! It doesn't have enough fuel.`);
  }

}


    // Homework: Allow me to customize how many gallons I want to transfer. Currently I can only transfer 1 gallon as it is written within the code.
    refuelUsing(car) {
        
      if (car.getCurrentFuel() > 2) {

          if (this.getCurrentFuel() > 0) {
              console.log(`${this.manufacturer} ${this.model} already has fuel, we don't need to take ${car.manufacturer} ${car.model}'s fuel!`);
          } else {
              this.setCurrentFuel(1);
              car.setCurrentFuel(car.getCurrentFuel() - 1);
              console.log(`${this.manufacturer} ${this.model} has recieved 1 gallon of fuel from ${car.manufacturer} ${car.model}.`); 
          }