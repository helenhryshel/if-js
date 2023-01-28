function convertDate(date) {
  const re = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/;
  const re2 = /.?(?<day>\d{2}\.).?(?<month>\d{2}\.)(?<year>\d{4})/;
  return date.replace(re, '0$<day>.0$<month>.$<year>').replace(re2, '$<day>$<month>$<year>');
}
const date = '2023-2-2';

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

  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      const result = data[i][key].match(string);

      if (result !== null) {
        arrayResult.push(data[i]);
        break;
      }
    }
  }

  return arrayResult;
}

console.log(searchPlace('ot'));
