// //Question 134: Take a JSON string and parse it into a JavaScript object.
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
var jsonString = '{"student":"Huma","course":"GEN-AI","city":"Karachi"}'; //this is json string formatted data.
console.log(jsonString);
var JsObj = JSON.parse(jsonString); // Parse the JSON string into a JavaScript object
console.log(JsObj);
//Author-Huma Mohsin
