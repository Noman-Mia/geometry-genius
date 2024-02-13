/*
objective:get base, height of a triangle.calculate the area by using the provide formula.and then
display the area.
*step-1: get base value of triangle
*step-2 added an id in base input field
*step-3 use getElementById to acces the input field
*step-4 get value from the input field (value id string now)
*step-5 convert the value to a number.use praseFloat
*/

function calculateTriangele(){
    //get triangle base value
   const triangleBaseInput=document.getElementById("triangle-base");
   const triangleBaseText=triangleBaseInput.value;
   const base =parseFloat(triangleBaseText);
      console.log(base);
   //get triangle height
   const triangleHeightInput=document.getElementById("triangle-height");
   const triangleHeightText=triangleHeightInput.value;
   const height=parseFloat(triangleHeightText)
    console.log(height);
};
