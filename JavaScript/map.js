var map = new Map();
map.set(1,"sonam");
map.set(2,"poonam");
map.set(3,"Parth");

console.log(map); //will print full map
console.log("Size od Map: "+map.size)
//get value on the basis of key
console.log("Value of Key 3= "+map.get(3));
console.log("Map has key 1? "+map.has(1));//map has key 1?
console.log("Deleted Key 1? "+map.delete(1)); //delete key from map

console.log(map);
//clear the map-- empty
map.clear();
console.log(map);