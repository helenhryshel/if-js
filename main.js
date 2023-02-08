const date = '2023-2-2';

const convertDate = (date) => {
  const re = /(?<year>\d{4})-(?<month>\d{1,2})-(?<day>\d{1,2})/;
  const re2 = /.?(?<day>\d{2}\.).?(?<month>\d{2}\.)(?<year>\d{4})/;
  return date
    .replace(re, '0$<day>.0$<month>.$<year>')
    .replace(re2, '$<day>$<month>$<year>');
};

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

const searchPlace = (string) => {
  const arrayResult = [];

  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      if (data[i][key].includes(string)) {
        arrayResult.push(Object.values(data[i]).join(', '));
      }
    }
  }

  return arrayResult;
};

console.log(searchPlace('er'));
