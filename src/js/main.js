const data = [
  {
    id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    id: 'aa560608-a879-48a7-80b6-deff2806b250',
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    id: '4024535d-a498-4274-b7cb-f01ada962971',
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    id: '190221c6-b18f-4dba-97de-e35f0e14c023',
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];
const guestItem = document.createElement('div');
guestItem.className = 'guests-container__item';

const hotelsMarkup = data
  .map(
    (hotel) =>
      `<div>
    <img src="${hotel.imageUrl}" id="${hotel.id}">
    <div>
    <p class="guests-container__name">${hotel.name}</p>
    <p class="guests-container__place">${hotel.city}, ${hotel.country}</p>
    </div>
    </div>`,
  )
  .join('');

guestItem.innerHTML = hotelsMarkup;
document.getElementById('guests-container__navigation').appendChild(guestItem);

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
