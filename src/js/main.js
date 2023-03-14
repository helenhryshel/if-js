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

const pictureSlides = (id, data) => {
  for (const element in data) {
    const guestItem = document.createElement('div');
    guestItem.className = 'guests-container__item';
    guestItem.id = data[element].id;
    const guestsImg = document.createElement('div');
    const image = document.createElement('img');
    image.src = data[element].imageUrl;
    const places = document.createElement('div');
    const guestHotel = document.createElement('p');
    guestHotel.className = 'guests-container__name';
    const textNameHotel = document.createTextNode(data[element].name);
    const guestPlace = document.createElement('p');
    guestPlace.className = 'guests-container__place';
    const textNameCountry = document.createTextNode(
      `${data[element].city}, ${data[element].country}`,
    );
    guestsImg.appendChild(image);
    guestItem.appendChild(guestsImg);
    guestsImg.appendChild(places);
    places.appendChild(guestHotel);
    places.appendChild(guestPlace);
    guestHotel.appendChild(textNameHotel);
    guestPlace.appendChild(textNameCountry);

    document.getElementById(id).appendChild(guestItem);
  }
};

pictureSlides('guests-container__navigation', data);

const myDropdown = document.getElementById('myDropdown');
myDropdown.onclick = () => {
  document.getElementById('dropdown').classList.toggle('show');
};

window.onclick = function (event) {
  if (!event.target.matches('.top-section__people')) {
    const dropdowns = document.getElementsByClassName('dropdown');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

const minusAdults = document.getElementById('minusAdults');
const plusAdults = document.getElementById('plusAdults');
const countNumber = document.getElementById('countNumber');
const minusChild = document.getElementById('minusChild');
const plusChild = document.getElementById('plusChild');
const countNumber2 = document.getElementById('countNumber2');
const minusRooms = document.getElementById('minusRooms');
const plusRooms = document.getElementById('plusRooms');
const countNumber3 = document.getElementById('countNumber3');

const counts = { Adults: 1, Child: 0, Rooms: 1 };
const countsElement = {
  Adults: countNumber,
  Child: countNumber2,
  Rooms: countNumber3,
};

const countCalc = (limits, sign, reserveEl) => {
  if (sign === 'plus') {
    if (counts[reserveEl] < limits) {
      counts[reserveEl]++;
      if (reserveEl === 'Child') {
        childSection(counts['Child'], sign);
      }
    }
  } else {
    if (counts[reserveEl] >= limits) {
      counts[reserveEl]--;
      if (reserveEl === 'Child') {
        childSection(counts['Child'], sign);
      }
    }
  }
  countsElement[reserveEl].innerHTML = counts[reserveEl];
  myDropdown.placeholder = `${counts['Adults']} Adults — ${counts['Child']} Children — ${counts['Rooms']} Room`;
};

plusAdults.addEventListener('click', () => countCalc(30, 'plus', 'Adults'));
minusAdults.addEventListener('click', () => countCalc(2, 'minus', 'Adults'));
plusChild.addEventListener('click', () => countCalc(10, 'plus', 'Child'));
minusChild.addEventListener('click', () => countCalc(1, 'minus', 'Child'));
plusRooms.addEventListener('click', () => countCalc(30, 'plus', 'Rooms'));
minusRooms.addEventListener('click', () => countCalc(2, 'minus', 'Rooms'));

myDropdown.placeholder = `${counts['Adults']} Adults — ${counts['Child']} Children — ${counts['Rooms']} Room`;

const childText = document.createElement('p');
childText.hidden = true;
childText.appendChild(
  document.createTextNode(
    'What is the age of the child you’re travelling with?',
  ),
);
document.getElementById('counterChild').appendChild(childText);

const childSection = (num, sign) => {
  childText.hidden = num <= 0;
  const selectAge = document.createElement('select');
  selectAge.id = 'selectAge' + num;
  for (let i = 0; i < 18; i++) {
    const childAge = document.createElement('option');
    selectAge.className = 'age';
    childAge.value = i;
    childAge.text = `${i} years old`;
    selectAge.appendChild(childAge);
  }
  if (sign === 'plus') {
    document.getElementById('counterChild').appendChild(selectAge);
  } else {
    num++;
    document.getElementById('selectAge' + num).remove();
  }
};
