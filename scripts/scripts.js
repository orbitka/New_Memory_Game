console.log("...scripts are loaded, hurray!!!");


//Main object
var memoryGame = {};

//Attributes: ---LEVELS----
// memoryGame.levels = {
// easy:{"numberOfCards": 4},
// medium: {"numberOfCards": 8},
// hard:{"numberOfCards": 12}
// };

//Attributes: ---THEMES----
// memoryGame.themes = {
//   photomix:{ name: "Photo-mix", cards : '[]'}
// };
//
//                   // -----Later it will be replaced with the selection of themes, now it is only one theme
//                   // memoryGame.themes = {
//                   //   photomix:{ name: "Photo-mix", cards : '[]'},
//                   //   cuba:{ name: "Cuba", cards : '[]'},
//                   //   formulaOne:{ name: "f1 in Melbourne", cards : '[]'},
//                   //   foliage:{ name: "Foliage", cards : '[]'},
//                   //   venice:{ name: "Venice", cards : '[]'}
//                   // };

//Additional attributes - details of nested arrays from the main object
// memoryGame.themes.photomix.cards = [
//   'images/photomix/photo01', 'images/photomix/photo02', 'images/photomix/photo03', 'images/photomix/photo04', 'images/photomix/photo05', 'images/photomix/photo06', 'images/photomix/photo07', 'images/photomix/photo08', 'images/photomix/photo09', 'images/photomix/photo10', 'images/photomix/photo11', 'images/photomix/photo12', 'images/photomix/photo13', 'images/photomix/photo14', 'images/photomix/photo15', 'images/photomix/photo16', 'images/photomix/photo17', 'images/photomix/photo18', 'images/photomix/photo19', 'images/photomix/photo20', 'images/photomix/photo21', 'images/photomix/photo22', 'images/photomix/photo23', 'images/photomix/photo24', 'images/photomix/photo25', 'images/photomix/photo26', 'images/photomix/photo27', 'images/photomix/photo28', 'images/photomix/photo29', 'images/photomix/photo30', 'images/photomix/photo31', 'images/photomix/photo32', 'images/photomix/photo33', 'images/photomix/photo34', 'images/photomix/photo35', 'images/photomix/photo36'
//   ];

                  // memoryGame.themes.cuba.cards = ['images/cuba/cuba1', 'images/cuba/cuba2', 'images/cuba/cuba3', 'images/cuba/cuba4', 'images/cuba/cuba5', 'images/cuba/cuba6', 'images/cuba/cuba7', 'images/cuba/cuba8'];
                  //
                  // memoryGame.themes.formulaOne.cards = ['images/f1/f1-1.jpg', 'images/f1/f1-2.jpg', 'images/f1/f1-3.jpg', 'images/f1/f1-4.jpg', 'images/f1/f1-5.jpg', 'images/f1/f1-6.jpg', 'images/f1/f1-7.jpg', 'images/f1/f1-8.jpg'];
                  //
                  // memoryGame.themes.foliage.cards = ['Images/foliage/foliage1.jpg', 'Images/foliage/foliage2.jpg', 'Images/foliage/foliage3.jpg', 'Images/foliage/foliage4.jpg', 'Images/foliage/foliage5.jpg', 'Images/foliage/foliage6.jpg', 'Images/foliage/foliage7.jpg', 'Images/foliage/foliage8.jpg'];
                  //
                  // memoryGame.themes.venice.cards = ['Images/venice/venice1.jpg', 'Images/venice/venice2.jpg', 'Images/venice/venice3.jpg', 'Images/venice/venice4.jpg', 'Images/venice/venice5.jpg',
                  // 'Images/venice/venice6.jpg', 'Images/venice/venice7.jpg', 'Images/venice/venice8.jpg'];


//-----Select the number of cards--------

      //-----We will GET THE VALUE OF THE RADIO BUTTON FORM LATER, now it is hard printed for "hard"
//
// var selectedLevel = "hard";
// var numberOfCards = memoryGame.levels.hard.numberOfCards;

//-----Select the theme--------

      //-----We will GET THE VALUE OF THE RADIO BUTTON FORM LATER, now it is hard printed for photomix!!!!!----
//
// var selectedTheme = memoryGame.themes.photomix;
// var selectedCards = memoryGame.themes.photomix.cards;

//-------test:
// console.log("Selected Number of Cards (Hardprinted): " + numberOfCards);
// console.log("selected cards: " + selectedCards);

//---THIS PART DOES NOT WORK!!!!!!!------

//from the "selectedTheme" we take out numberOfCards from our selectedTheme of cards and create a new array "firstHalf"
//
// var firstHalf = [];
// var secondHalf = firstHalf;
//
// var array = memoryGame.themes.photomix.cards;
// function getRandomIndex(){
//     num = Math.floor(Math.random()*array.length)
//     return num;
// }
//
// function makeImageArray(array){
//   var j = getRandomIndex()
//   for (var i = 0; i < array.length; i++) {
//     num = array.slice(j, 1)
//     firstHalf.push(num)
//   }
//   console.log('firstHalf = ' + firstHalf);
// }

//---the result has to be var firstHalf = array of 12 cards---

//--FROM HERE IT IS HARDCODED - TILL I FIX THE PREVIOUS PART (SELECTION OF 12 UNIQUE RANDOM CARDS INTO the firstHalf array)

//HARDCOADED variable firstHalf:
firstHalf = [
  'images/photomix/photo01', 'images/photomix/photo02', 'images/photomix/photo03', 'images/photomix/photo04', 'images/photomix/photo05', 'images/photomix/photo06', 'images/photomix/photo07', 'images/photomix/photo08', 'images/photomix/photo09', 'images/photomix/photo10', 'images/photomix/photo11', 'images/photomix/photo12'
];

//-------now we multiply the firstHalf of working array so we a new array consisting of pair of cards
var workingArray =[];
var secondHalf = firstHalf;

workingArray = firstHalf.concat(secondHalf);

//------to test-----
console.log("firstHalf = " + firstHalf);
console.log("secondHalf = " + secondHalf);
console.log("Full set of cards to display (workingArray): number of cards: " + workingArray.length + "|| CARDS: " + workingArray);

// now we have a workingArray which consists of 24 cards (12 pairs)

//to mix the cards into random order


//---^|^|^--UP TO HERE NO BUGS - remove console.logs when finished --^|^|^----

//to add divs to the page to create cards-display---
function dynamicDiv() {

  var newDiv = document.createElement("div"); //create a div element

  var cardImage = document.createElement("img");


  newDiv.appendChild(cardImage)//append image to the div

  newDiv.class = "single-card-div"; //add class to each new div for css styling
  document.getElementById("cards-display").appendChild(newDiv);
}







//-----HERE TO CONTINUE------
