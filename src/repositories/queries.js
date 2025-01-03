function addRowLock(flightId){
    return `select * from Flights where Flights.id = ${flightId} FOR UPDATE`;
}

module.exports = {
    addRowLock
}