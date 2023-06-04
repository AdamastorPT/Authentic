window.addEventListener('DOMContentLoaded', () => {
  const marcasButton = document.querySelector('#navbar li:nth-child(2)');
  const submenu = document.querySelector('.submenu');

  marcasButton.addEventListener('mouseenter', () => {
      submenu.style.display = 'block';
  });

  marcasButton.addEventListener('mouseleave', () => {
      submenu.style.display = 'none';
  });


  // Definition of index variable to control loop over the carousel images
  let index = 1;

  // Definiton of number of slides
  let nSlides = 3;

  // Fetch radioIndex button using the ID of the button and change attribute checked to true
  // This sets the first element of our carousel as the current selected slide
  document.getElementById("radio" + index).checked = true;

  // Set a method to be executed in a specific interval in milliseconds
  let interval = 2500;
  const intervalID = setInterval(nextCarousel, interval);

  // Definition of the nextCarousel method that is called by the setInterval above
  function nextCarousel () {

    // Increment the variable that controls the loop over the carousel images
    // This is used to select the next slide
    index = index + 1;

    // When we reach the end of the carousel we go back to the first element of carousel
    if (index > nSlides) {
      index = 1;
    }

    // Fetch radioIndex button using the ID of the button and change attribute checked to true
    // This sets the index positon element of our carousel as the current selected slide
    document.getElementById("radio" + index).checked = true;
  }
});
