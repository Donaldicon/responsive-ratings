
function changeColor(event) {
    var buttons = document.querySelectorAll('#box');

    // Removing the active class from all buttons
    buttons.forEach(function(button) {
      button.classList.remove('bg-[#7b8797]', 'hover:bg-[#7b8797]',  'text-[#fff]');
    });

    // Adding the active class to the clicked button
    event.target.classList.add('bg-[#7b8797]', 'hover:bg-[#7b8797]', 'text-[#fff]');

    var value = event.target.value

    console.log(value);

    // Saving my value to local storage
    localStorage.setItem('selectedValue', value);

  }
