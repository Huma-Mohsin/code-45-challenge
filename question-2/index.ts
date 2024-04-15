// //Question 134: Take a JSON string and parse it into a JavaScript object.

// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.

const jsonString='{"student":"Huma","course":"GEN-AI","city":"Karachi"}';//this is json string formatted data.
console.log(jsonString);
const JsObj=JSON.parse(jsonString);// Parse the JSON string into a JavaScript object
console.log(JsObj);//
//In this example, we have a JSON string jsonString containing information about a student. We use JSON.parse(jsonString) to convert this JSON string into a JavaScript object, which we store in the variable jsobj. Finally, we log the resulting JavaScript object to the console.
//Author-Huma Mohsin
