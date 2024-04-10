// api to getAllCars
const cars= require("../cars.json")

module.exports = async function getCars (context, req) {
    context.log('JavaScript HTTP trigger getting all cars...');
    context.res = {        
        body: cars,
    };
}
