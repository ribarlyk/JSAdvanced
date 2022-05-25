function cityTaxes(name, population, treasury) {
  let obj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      let toBeApplied = percentage / 100;
      this.population *= toBeApplied + 1;
      this.population = Math.round(this.population);
    },
    applyRecession(percentage) {
      let toBeApplied = percentage / 100;
      this.treasury *= 1 - toBeApplied;
      this.population = Math.round(this.population);
    },
  };
  return obj;
}

const city = cityTaxes("Tortuga", 7000, 2, 15000, 123);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(21);
console.log(city.population);
