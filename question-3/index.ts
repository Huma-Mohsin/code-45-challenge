// //Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.

const faculty={
    "name":"Asim",
    "courseAssigned":"GEN-AI",
    "Programming Skills":[
        "Proficiency in a programming language commonly used in AI (such as Python)",
        "Experience with deep learning frameworks (TensorFlow, PyTorch)",
        "Ability to implement and debug generative models"
      ]
}
const jsonString=JSON.stringify(faculty,null,2);
//In this example, the JSON.stringify() method is used with three arguments:

// The first argument is the JavaScript object faculty that we want to convert into a JSON string.
// The second argument is null, which means no replacement is performed during stringification.
// The third argument is 2, which specifies the number of spaces to use for indentation. we can adjust this number based on our preference for indentation.
// By providing the third argument with a value (in this case, 2), the resulting JSON string will be formatted with proper indentation, making it more readable. This formatted JSON string is then logged to the console.
console.log(jsonString);
//Author-Huma Mohsin
