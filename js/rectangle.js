function calculateRectangleArea(){
    //width ber
   const rectangleWidthInput = document.getElementById('rectangle-width');
   const widthText = rectangleWidthInput.value;
   const width = parseFloat(widthText);
   console.log(width);

   //length ber 
   const rectangeLengthInput = document.getElementById('rectangle-length');
   const lengthText = rectangeLengthInput.value;
   const length = parseFloat(lengthText);
   console.log(length);

  //calculate area
  const area = width*length;
  console.log("area of the rectangle",area);

  // display rectangele area
  const rectangeleAreaSpan = document.getElementById('rectangle-area');
  rectangeleAreaSpan.innerText=area;
};

