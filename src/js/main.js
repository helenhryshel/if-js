const optionsData = {
  adults: {
    min: 1,
    max: 30,
    value: 1,
  },
  children: {
    min: 0,
    max: 10,
    value: 0,
  },
  rooms: {
    min: 1,
    max: 30,
    value: 1,
  },
};

const searchInfo = document.getElementById('sectionPeople');
const optionsText = document.getElementById('myDropdown');
optionsText.placeholder = `${optionsData.adults.value} Adults — ${optionsData.children.value} Children — ${optionsData.rooms.value} Room`;

const createOptionsDiv = () => {
  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('options');
  optionsDiv.setAttribute('id', 'options');
  optionsDiv.innerHTML = `<div class="options-items" id="options-items"></div>
       <div class="options-text-div" id="options-text-div"></div>
       <div class="options-select-items" id="options-select-items"></div>`;
  searchInfo.appendChild(optionsDiv);
  createOptions();
  searchInfo.removeEventListener('click', createOptionsDiv);
};

const createOptions = () => {
  const optionsItems = document.getElementById('options-items');
  Object.keys(optionsData).forEach((option) => {
    const optionsItem = document.createElement('div');
    optionsItem.classList.add('options-item');
    optionsItem.innerHTML = `
         <div class="options-description-text">
           <span>${capitalizeFirstLetter(option)}</span>
         </div>
         <div class="options-item-buttons">
           <button class="options-button options-minus-button_js" id="options-minus-button-${option}"  type="button" >—</button>
           <span class="options-counter-number" id="options-counter-number-${option}">${
      optionsData[option].value
    }</span>
           <button class="options-button options-plus-button_js" id="options-plus-button-${option}" type="button">+</button>
         </div>
       `;
    optionsItems.appendChild(optionsItem);
    document
      .getElementById(`options-plus-button-${option}`)
      .addEventListener('click', () => addOne(option));
    document
      .getElementById(`options-minus-button-${option}`)
      .addEventListener('click', () => removeOne(option));
  });
};

const capitalizeFirstLetter = (option) =>
  option[0].toUpperCase() + option.slice(1);

const addChildrenAge = () => {
  const ageChildrenBlock = document.getElementById('options-select-items');
  const ageOptions = [...Array(18)]
    .map(
      (_, index) =>
        `<option value=${index}>${index} ${
          index === 1 ? 'year old' : 'years old'
        }</option>`,
    )
    .join('');

  ageChildrenBlock.innerHTML += `<div class="options-select-item"><select id="options-child-age" class="options-child-age-select" name="options-child-age">${ageOptions}</select></div>`;
};

const removeChildrenAge = () => {
  const ageChildrenBlock = document.getElementById('options-select-items');
  const lastSelectItem = document.querySelector(
    '.options-select-item:last-child',
  );
  ageChildrenBlock.removeChild(lastSelectItem);
};

const addChildrenAgeQuestion = () => {
  const optionsTextDiv = document.getElementById('options-text-div');
  optionsTextDiv.innerHTML = `
     <span class="options-text" id="options-text">What is the age of the child you’re travelling with?</span>
   `;
};

const removeChildrenAgeQuestion = () => {
  const optionsTextDiv = document.getElementById('options-text-div');
  optionsTextDiv.innerHTML = '';
};

const addOne = (optionName) => {
  if (optionsData[optionName].value < optionsData[optionName].max) {
    optionsData[optionName].value++;
    if (optionName === 'children') {
      addChildrenAge();
    }
  }
  if (optionsData[optionName].value === optionsData[optionName].max) {
    const plusButton = document.getElementById(
      `options-plus-button-${optionName}`,
    );
    plusButton.setAttribute('disabled', 'disabled');
  }
  if (optionsData[optionName].value > optionsData[optionName].min) {
    const minusButton = document.getElementById(
      `options-minus-button-${optionName}`,
    );
    minusButton.removeAttribute('disabled');
  }
  if (optionName === 'children' && optionsData[optionName].value === 1) {
    addChildrenAgeQuestion();
  }
  refreshOptionCounter(optionName);
};

const removeOne = (optionName) => {
  if (optionsData[optionName].value > optionsData[optionName].min) {
    optionsData[optionName].value--;
    if (optionName === 'children') {
      removeChildrenAge();
    }
  }
  if (optionsData[optionName].value === optionsData[optionName].min) {
    const minusButton = document.getElementById(
      `options-minus-button-${optionName}`,
    );
    minusButton.setAttribute('disabled', 'disabled');
  }
  if (optionsData[optionName].value < optionsData[optionName].max) {
    const plusButton = document.getElementById(
      `options-plus-button-${optionName}`,
    );
    plusButton.removeAttribute('disabled');
  }
  if (optionName === 'children' && optionsData[optionName].value < 1) {
    removeChildrenAgeQuestion();
  }
  refreshOptionCounter(optionName);
};

const refreshOptionCounter = (optionName) => {
  const optionNumber = document.getElementById(
    `options-counter-number-${optionName}`,
  );
  optionNumber.textContent = optionsData[optionName].value;
  optionsText.placeholder = `${optionsData.adults.value} Adults — ${optionsData.children.value} Children — ${optionsData.rooms.value} Room`;
};

searchInfo.addEventListener('click', createOptionsDiv);

const guestData = (data) => {
  const guestItem = document.createElement('div');
  guestItem.className = 'guests-container__item';

  const hotelsMarkup = data.map(
    (hotel) =>
      `<div>
    <img class="picture"  src="${hotel.imageUrl}" id="${hotel.id}">
    <div>
    <p class="guests-container__name">${hotel.name}</p>
    <p class="guests-container__place">${hotel.city}, ${hotel.country}</p>
    </div>
     </div>`,
  );

  hotelsMarkup.forEach((hotel) => {
    document.getElementById('guests-container__navigation').innerHTML += hotel;
  });
};

if (sessionStorage.getItem('json')) {
  const data = JSON.parse(sessionStorage.getItem('json'));
  guestData(data);
} else {
  fetch('https://if-student-api.onrender.com/api/hotels/popular')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      sessionStorage.setItem('json', JSON.stringify(data));
      guestData(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
//"Available hotels" block

const sectionSearch = document.createElement('div');
sectionSearch.className = 'section_Search';
sectionSearch.style.display = 'none';
document.getElementById('top-section').after(sectionSearch);

const pictureBlock = document.createElement('div');
pictureBlock.className = 'picture_Block';

const searchBlock = `<div class="searchTitle">
<h2 class="searchTitleName">Available hotels</h2>
</div>`;
sectionSearch.innerHTML = searchBlock;

const searchPlace = (search) => {
  fetch(`https://if-student-api.onrender.com/api/hotels?search=${search}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const guestItem = document.createElement('div');
      guestItem.className = 'guests-container__item';

      const hotelsMarkup = data.map(
        (hotel) =>
          `<div>
    <img class="picture"  src="${hotel.imageUrl}" id="${hotel.id}">
    <div>
    <p class="guests-container__name">${hotel.name}</p>
    <p class="guests-container__place">${hotel.city}, ${hotel.country}</p>
    </div>
     </div>`,
      );
      pictureBlock.innerHTML = '';
      hotelsMarkup.forEach((hotel) => {
        pictureBlock.innerHTML += hotel;
      });
      sectionSearch.appendChild(pictureBlock);
      sectionSearch.style.display = data.length === 0 ? 'none' : 'flex';
    })
    .catch((err) => {
      console.log(err.message);
    });
};

document.querySelector('.top-section__button').addEventListener('click', () => {
  searchPlace(document.getElementById('destination').value);
});
