function convertDate(date) {
  const re = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/;
  const finalDate = date.match(re);
  for (let i = 2; i < 4; i++) {
    if (finalDate[i].length < 2) finalDate[i] = '0' + finalDate[i];
  }

  return finalDate[3] + '.' + finalDate[2] + '.' + finalDate[1];
}

const date = '2023-1-14';

console.log(convertDate(date));

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function searchPlace(string) {
  const arrayResult = [];
  let stringResult = '';
  for (let i = 0; i < data.length; i++) {
    for (const index in data[i]) {
      const result = data[i][index].match(string);

      if (result !== null) {
        arrayResult.push(data[i]);
        break;
      }
    }
  }
  for (let i = 0; i < arrayResult.length; i++) {
    const values = Object.values(arrayResult[i]);
    stringResult = stringResult + '\n' + values.toString();
  }
  return stringResult;
}

console.log(searchPlace('er'));
