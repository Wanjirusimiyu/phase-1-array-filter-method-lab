// Code your solution here
// find matchingDrivers
function findMatching(drivers, query) {
return drivers.filter(driver => 
    driver.toLowerCase() === query.toLowerCase()
    );
}
// finding fuzzyMatch
 function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())  
      );
 }
//  finding matchingNames
function matchName(drivers, name) {
    return drivers.filter(driver => 
     driver.name.toLowerCase() === name.toLowerCase() 
     );
}
