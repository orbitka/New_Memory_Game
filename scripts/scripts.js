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

//===============================
//===============================
//--FROM HERE IT IS HARDCODED - TILL I FIX THE PREVIOUS PART (SELECTION OF 12 UNIQUE RANDOM CARDS INTO the firstHalf array)
//===============================
//===============================
//===============================

//HARDCOADED variable firstHalf:
firstHalf = [
  'images/photomix/photo01', 'images/photomix/photo02', 'images/photomix/photo03', 'images/photomix/photo04', 'images/photomix/photo05', 'images/photomix/photo06', 'images/photomix/photo07', 'images/photomix/photo08', 'images/photomix/photo09', 'images/photomix/photo10', 'images/photomix/photo11', 'images/photomix/photo12'
];

//-------now we multiply the firstHalf of working array so we have a new array consisting of pairs of cards
var workingArray =[];
var secondHalf = firstHalf;

workingArray = firstHalf.concat(secondHalf);

//This block of code is from StackOverflow - Sergey helped!
Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

workingArray.shuffle();


// now we have a workingArray which consists of 24 cards (12 pairs)




//add divs to the page to create cards-display---
function dynamicDiv(imageSource) {

  var newDiv = document.createElement("div"); //create a div element
  var cardImage = document.createElement("img");

// Give cardImage attribute 'src' of input-src
  cardImage.setAttribute("src",imageSource+'.jpg')
  newDiv.appendChild(cardImage)//append image to the div

  newDiv.classList.add("single-card-div"); //add class to each new div for css styling
  document.getElementById("cards-display").appendChild(newDiv);
}

function flipCard(){
  console.log('flipCard image is ' + $(this).children().eq(0).attr('src'));
  // First, use .css() to remove $(this) background-image styling, and change opacity of $(this).children().eq(0) to 1

  $(this).children().eq(0).css('opacity',1).addClass('selected');


  // Second, create a counter so that the game knows if one card is flipped or two
  var counter = $('.selected').length;

  // Third, write a conditional that does nothing if one card is flipped, and if two cards are flipped, it checks the image src to see if they match
  if (counter === 2){
    var cardOneImage = $('.selected').eq(0).attr('src');
    var cardTwoImage = $('.selected').eq(1).attr('src');
    if (cardOneImage === cardTwoImage) {
      console.log('cards matched');
      $('.selected').removeClass('selected');
    } else {
      console.log('no match');
      // Fourth, write functionality that will flip cards down if they don't match
      setTimeout(function(){
        console.log($('.selected'));
        $('.selected').css('opacity',0);
        $('.selected').removeClass('selected');
      }, 1000);
    }
  }
};

$(document).ready(function(){
  //Iterate through workingArray such that you run DynamicDiv for each entry in workingArray
  //This will create a new div, which will contain images of the src from the workingArray
  for (var i = 0; i < workingArray.length; i++) {
    // console.log(workingArray[i])
    dynamicDiv(workingArray[i])
  }
  // dynamicDiv()
  $('.single-card-div').on('click', flipCard);

})
