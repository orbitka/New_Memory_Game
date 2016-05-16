console.log("...scripts are loaded!!!");



//-----Main object
var memoryGame = {};

//-----variable firstHalf:
firstHalf = [
  'images/photomix/photo01', 'images/photomix/photo02', 'images/photomix/photo03', 'images/photomix/photo04', 'images/photomix/photo05', 'images/photomix/photo06', 'images/photomix/photo07', 'images/photomix/photo08', 'images/photomix/photo09', 'images/photomix/photo10', 'images/photomix/photo11', 'images/photomix/photo12'
];

//-----we multiply the firstHalf of working array so we have a new array consisting of pairs of cards
var workingArray =[];
var secondHalf = firstHalf;

workingArray = firstHalf.concat(secondHalf);

//-----This block of code is from StackOverflow - Sergey helped!
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


//-----now we have a workingArray which consists of 24 cards (12 pairs)

//-----we add divs to the page to create cards-display---
function dynamicDiv(imageSource) {

  var newDiv = document.createElement("div"); //create a div element
  var cardImage = document.createElement("img");

//-----give cardImage attribute 'src' of input-src
  cardImage.setAttribute("src",imageSource+'.jpg')
  newDiv.appendChild(cardImage)//append image to the div

  newDiv.classList.add("single-card-div"); //add class to each new div for css styling
  document.getElementById("cards-display").appendChild(newDiv);
}

function flipCard(){
  // console.log('flipCard image is ' + $(this).children().eq(0).attr('src'));

  //----- First, use .css() to remove $(this) background-image styling, and change opacity of $(this).children().eq(0) to 1

  $(this).children().eq(0).css('opacity',1).addClass('selected');


  //----- Second, create a counter so that the game knows if one card is flipped or two
  var counter = $('.selected').length;

  //----- Third, write a conditional that does nothing if one card is flipped, and if two cards are flipped, it checks the image src to see if they match
  if (counter === 2){
    var cardOneImage = $('.selected').eq(0).attr('src');
    var cardTwoImage = $('.selected').eq(1).attr('src');
    if (cardOneImage === cardTwoImage) {
      console.log('cards matched');
      $('.selected').addClass('faceUp');
      $('.selected').removeClass('selected');

      var cardsUp = $('.faceUp').length;
      if (cardsUp === workingArray.length) {
          alert("Bravo!!! You did it! Press NEW GAME to play again");
      }

    } else {
      // console.log('no match');

      //----- Fourth, write functionality that will flip cards down if they don't match
      setTimeout(function(){
        $('.selected').css('opacity',0);
        $('.selected').removeClass('selected');
      }, 1000);
    }
  }
};

$(document).ready(function(){
  //-----Iterate through workingArray such that you run DynamicDiv for each entry in workingArray
  //-----This will create a new div, which will contain images of the src from the workingArray
  for (var i = 0; i < workingArray.length; i++) {
    // console.log(workingArray[i])
    dynamicDiv(workingArray[i])
  }
  // dynamicDiv()
  $('.single-card-div').on('click', flipCard);
})
