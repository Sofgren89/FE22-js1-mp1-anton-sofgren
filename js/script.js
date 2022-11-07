//Uppgift 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 1; i < numbers.length; ++i) {
   console.log(numbers[i])
}


for (let i = 1; i < 6; i++) {
   const h1Element = document.createElement('h1')
   h1Element.innerText = 'Rad' + ' ' + i;
   document.body.appendChild(h1Element);
   h1Element.style.backgroundColor = "hsl(100, 86%, 90%)";
   h1Element.style.textAlign = 'center';
   h1Element.style.fontSize = '10px'
   h1Element.style.marginLeft ='300px'
   h1Element.style.marginRight= '300px'

   if (numbers[i] > 2) {
      h1Element.style.backgroundColor = "hsl(125, 86%, 85%)";
      h1Element.style.fontSize = '20px'
   }

   if (numbers[i] > 3) {
      h1Element.style.backgroundColor = "hsl(145, 86%, 80%)";
      h1Element.style.fontSize = '25px'
   }

   if (numbers[i] > 4) {
      h1Element.style.backgroundColor = "hsl(165, 86%, 75%)";
      h1Element.style.fontSize = '30px'
   }

   if (numbers[i] > 5) {
      h1Element.style.backgroundColor = "hsl(185, 86%, 70%)";
      h1Element.style.fontSize = '40px'
   }

}

const h1List = document.querySelectorAll('h1');
console.log(h1List);

for (let i = 0; i < 5; i++) {
   h1List[i].style.color = 'hsl(265, 100%, 64%)'
}

//Uppgift 2

const box = document.createElement('div')
document.body.appendChild(box);
box.style.border = "3px solid black";
box.style.display = 'flex';
box.style.marginLeft='300px';
box.style.marginRight='300px';
box.style.justifyContent = 'space-around';


const ul1 = document.createElement('ol');
box.appendChild(ul1);



for (let i = 0; i < 10; i++) {
   let h2Element = document.createElement('li');
   ul1.appendChild(h2Element);
   h2Element.innerText = [i]
   h2Element.style.width = '6vw'
   h2Element.style.listStyleType = 'none'
 
   ul1.style.backgroundColor = 'lightskyblue'
   ul1.style.padding = '10px'
   ul1.style.marginTop = '50px'
   ul1.style.marginBottom ='50px'

   if (i == 5) {
      h2Element.style.backgroundColor = 'lightskyblue';
      h2Element.style.color = 'white'
      
      

   }

   else if (i % 2 == 0) {
      h2Element.style.backgroundColor = 'black'
      h2Element.style.color = 'white'
   }
   else if (i % 2==1){
      h2Element.style.backgroundColor = 'white'
   }

}

const ul2 = document.createElement('ol');
box.appendChild(ul2);

for (let i = 9; i >= 0; i--) {
   let h3Element = document.createElement('li');
   ul2.appendChild(h3Element);
   h3Element.style.textAlign = 'center';
   h3Element.innerText = [i]
   h3Element.style.width = '6vw'
   h3Element.style.listStyleType = 'none'
   ul2.style.backgroundColor = 'lightskyblue'
   ul2.style.padding = '10px'
   ul2.style.marginTop = '50px'
   ul2.style.marginBottom ='50px'
   

   if (i == 8) {
      h3Element.style.backgroundColor = 'lightskyblue';
      h3Element.style.color = 'white'
   }

   else if (i % 2 == 0) {
      h3Element.style.backgroundColor = 'black'
      h3Element.style.color = 'white'
   }

   else if (i % 2==1){
      h3Element.style.backgroundColor = 'white'
   }

}

const nummer = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
console.log(nummer)

const ul3 = document.createElement('ol');
box.appendChild(ul3);

for (let i = 0; i < nummer.length; i++) {
   let h4Element = document.createElement('li');
   ul3.appendChild(h4Element);
   h4Element.innerText = nummer[i]
   h4Element.style.textAlign = 'right'
   h4Element.style.width = '6vw'
   h4Element.style.listStyleType = 'none'
   ul3.style.backgroundColor = 'lightskyblue'
   ul3.style.padding = '10px'
   ul3.style.marginTop = '50px'
   ul3.style.marginBottom ='50px'

   if (i == [5]) {
      h4Element.style.backgroundColor = 'lightskyblue';
   }
   else if (i % 2 == 0) {
      h4Element.style.backgroundColor = 'black'
      h4Element.style.color = 'white'
   }

else if (i % 2==1){
   h4Element.style.backgroundColor = 'white'
}
}

