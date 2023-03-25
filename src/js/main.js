fetch('https://if-student-api.onrender.com/api/hotels/popular')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
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
      document.getElementById('guests-container__navigation').innerHTML +=
        hotel;
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
