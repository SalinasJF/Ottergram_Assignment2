/*
Jorge Salinas
Salinasjf@csu.fullerton.edu
Assignment 2
Due Date February 28, 2018
For finding the current detail image,I used
a switch case statement. Then I returned the positions
to appropriate functions to change the image Next
and previous.

*/
var DETAIL_IMAGE_SELECTOR = "[data-image-role=\"target\"]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=\"title\"]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=\"trigger\"]";


function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use scrict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}


function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function getDetailImagePos() {
  var pos = 0;
  //gets current detail image and places title of detail image to var slogan
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  var slogan = detailTitle.textContent;
  //slogan is now used to find postion of current detail image in array
  switch (slogan) {
  case "Stayin' Alive":
    pos = 0;
    break;
  case "How Deep Is Your Love":
    pos = 1;
    break;
  case "You Should Be Dancing":
    pos = 2;
    break;
  case "Night Fever":
    pos = 3;
    break;
  case "To Love Somebody":
    pos = 4;
    break;
  default:

  }
  return pos;
}

function changeImageRight() {
  //insert code to parse left and right
  var thumbnails = getThumbnailsArray();
  var pos = getDetailImagePos();
  if (pos<4) {
    pos++;
  }
  setDetails(imageFromThumb(thumbnails[pos]), titleFromThumb(thumbnails[pos]));

}

function changeImageLeft(){

  var thumbnails = getThumbnailsArray();
  var pos = getDetailImagePos();
  if (pos>0) {
    pos--;
  }
  setDetails(imageFromThumb(thumbnails[pos]), titleFromThumb(thumbnails[pos]));
}

function initializeButton() {
//gets right button from .html and gives it a function on click
  document.getElementById("right").onclick = function() {
    changeImageRight();
  };
  //gets left button from .html and gives it a function on click
  document.getElementById("left").onclick = function(){
    changeImageLeft();
  };
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);

}
initializeButton();
initializeEvents();
