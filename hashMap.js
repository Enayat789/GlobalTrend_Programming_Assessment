// 8. Implement a simple HashMap class with put, get, and remove methods.

class HashMap {
  constructor() {
    this.map = {};
  }

  // Method to add a key-value pair to the map
  put(key, value) {
    this.map[key] = value;
  }

  // Method to get the value associated with a key
  get(key) {
    return this.map[key];
  }

  // Method to remove a key-value pair from the map
  remove(key) {
    delete this.map[key];
  }
}

const myHashMap = new HashMap();
myHashMap.put("name", "Enayat");
myHashMap.put("age", 19);
console.log(myHashMap.get("name")); 
console.log(myHashMap.get("age")); 

myHashMap.put("age", 20); 
console.log(myHashMap.get("age")); 

myHashMap.remove("name");
console.log(myHashMap.get("name")); 
