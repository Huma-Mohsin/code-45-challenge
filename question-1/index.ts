// //Question 133: Write a JavaScript object and convert it into a JSON string.

// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().


//create an object of car.
//------------------------

const car={
    "make": "Toyota",
    "model": "Camry",
    "year": 2022,
    "color": "blue",
    "engine": {
      "type": "V6",
      "horsepower": 268
    },
    "features": ["leather seats", "sunroof", "backup camera"]
  };
  console.log("Car through Object:"  ,car);
  
  
//convert it into a JSON string.
//-----------------------------
  //A JSON string is a string representation of data in JSON (JavaScript Object Notation) format. JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and for machines to parse and generate.

// In a JSON string:

// Data is represented using key-value pairs.
// Keys are always strings and enclosed in double quotes.
// Values can be strings, numbers, arrays, objects, booleans, or null.
// Objects can contain nested objects and arrays.

//to convert a JavaScript object into a JSON string, you can use the JSON.stringify() method. 
const jsonString =JSON.stringify(car);

console.log("\n");

console.log("Car through JsonStringify:" ,jsonString);
//author-Huma Mohsin
