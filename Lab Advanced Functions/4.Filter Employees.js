function sort(string, criteria) {
  let arr = JSON.parse(string);
  let [key, value] = criteria.split("-");
  if (criteria == "all") {
    arr
      .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
      .forEach((x) => console.log(x));
  } else {
    arr
      .filter((x) => x[key] == value)
      .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
      .forEach((x) => console.log(x));
  }
}

sort(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "all"
);
