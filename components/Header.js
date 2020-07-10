// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
function Header() {
    const headerContainer = document.querySelector('.header-container');
  
    // header
    const header = document.createElement('div');
    header.classList.add('header');
    headerContainer.appendChild(header);
  
    // date
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'MARCH 28, 2020';
    header.appendChild(date);
  
    // headline
    const headLine = document.createElement('h1');
    headLine.textContent = 'Lambda Times';
    header.appendChild(headLine);
  
    // temperature
    const temperature = document.createElement('span');
    temperature.textContent = '98';
    header.appendChild(temperature);
  }
  Header();