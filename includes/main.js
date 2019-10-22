$(document).ready(initiateApp);

var pictures = [
  'images/landscape-2.jpg',
  'images/landscape-3.jpg',
  'images/landscape-8.jpg',
  'images/landscape-9.jpg',
  'images/landscape-10.jpg',
  'images/landscape-11.jpg',
  'images/landscape-13.jpg',
  'images/landscape-14.jpg',
  'images/landscape-15.jpg',
  'images/landscape-17.jpg',
  'images/landscape-18.jpg',
  'images/landscape-19.jpg',
  'images/pexels-photo-132037.jpg',
  'images/pretty.jpg'
];

function initiateApp() {
  $(function () {
    $("#gallery").sortable();
    $("#gallery").disableSelection();
  });
  makeGallery(pictures);
  addModalCloseHandler();
}
/*advanced: add jquery sortable call here to make the gallery able to be sorted
  //on change, rebuild the images array into the new order
*/

function makeGallery(imageArray) {
  console.log("makeGallery", imageArray);
  for(var index = 0; index < imageArray.length; index++) {
    var image = imageArray[index];

    var figureElt = $('<figure>');
    figureElt.addClass("imageGallery col-xs-12 col-sm-6 col-md-4")
             .css("background-image", "url(" + image + ")")
             .on("click", displayImage)
             .attr('data-target', '#galleryModal')
             .attr('data-toggle', 'modal');
    $('#gallery').append(figureElt);
  }
}

function addModalCloseHandler() {
$('.modal img').click(function(){
  $(event.target).modal('hide')
});
  //add a click handler to the img element in the image modal.  When the element is clicked, close the modal
  //for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp

}

function displayImage() {
  console.log('displayImage', this);
  var currElt = $(this);
  var backgroundImage = currElt.css('background-image');
  var imagePosition = backgroundImage.search("images");
  var imageString = backgroundImage.substring(imagePosition);
  var imageUrl= imageString.slice(0, -2);
  var imageUrlEnd = imageUrl.indexOf(".");
  var titleUrl = imageUrl.slice(0, imageUrlEnd);

  var changeModalTitle = $('.modal-title').text(titleUrl);
  var changeImageUrl = $('img').attr('src', imageUrl);
  //debugger;
  //find the url of the image by grabbing the background-image source, store it in a variable
  //grab the direct url of the image by getting rid of the other pieces you don't need

  //grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
  // pexels-photo-132037
  //take a look at the lastIndexOf method

  //change the modal-title text to the name you found above
  //change the src of the image in the modal to the url of the image that was clicked on

  //show the modal with JS.  Check for more info here:
  //https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}
