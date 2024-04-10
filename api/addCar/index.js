// api to add a car

const cars= require("../cars.json");

module.exports = async function addCar(context, req) {
    context.log('JavaScript HTTP trigger adding a new car...');

   const newCar= req.body;
   cars.push(newCar);


    context.res = {
        // status: 200, /* Defaults to 200 */
        body: newCar,
    };
}