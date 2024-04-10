// api to remove car 

const cars= require("../cars.json");

module.exports = async function deleteCar (context, req) {
    context.log('JavaScript HTTP trigger to delete a car from list');
    
    const index = req.params.index;
    cars.splice(index, 1);

    context.res = {
        // status: 200, /* Defaults to 200 */
        // body: responseMessage
    };
}