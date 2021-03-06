export const logInLoadRequest = (name = '', password = '') => 
  new Promise((res, rej) => {
    setTimeout(() => {
      if (name.toLowerCase() + '$' + password === 'admin$12345') {
        res({
          name,
          email: 'test@test.test',
          photoUrl: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        });
      } else {
        rej('Failed');
      }
    }, 1000);
  });

export const loadNewsRequest = () => 
  new Promise((res) => {
    setTimeout(() => {
      res([
        {
          title: 'США выделили морской охране Украины четыре миллиона долларов помощи',
          description: `КИЕВ, 19 ноя - РИА Новости. США выделили морской охране Украины в Мариуполе и Бердянске 4 миллиона долларов помощи,
          сообщила в четверг пресс-служба посольства США на Украине. США через программу по экспортному контролю и безопасности границ 
          объявили о помощи на 4 миллиона долларов морской охране Украины в Мариуполе и Бердянске", - сообщается на странице посольства в Twitter,
            В дипведомстве уточнили, что новое оборудование поможет морской охране круглосуточно обеспечивать безопасность в Азовском море.`,
          date: '2020-11-19T14:48:00.000Z'
        },
        {
          title: 'Названы марки машин, чаще всего нарушающие правила парковки в Москве',
          description: `МОСКВА, 19 ноя - РИА Новости. Более 40 тысяч люксовых автомобилей оказались на спецстоянках 
          "Московского паркинга" в этом году, чаще других нарушают владельцы Toyota и Mercedes, 
          сообщает пресс-служба столичного департамента транспорта в Telegram-канале. 
          "За этот год на спецстоянках "Московского паркинга" оказались более 40 тысяч люксовых автомобилей. 
          Причины стандартные - парковка на местах для инвалидов, тротуарах, пешеходных переходах, а также под запрещающими знаками", - говорится в сообщении.`,
          date: '2020-11-19T18:34:00.000Z'
        },
        {
          title: 'Власти надеются, что Петербург вышел на плато по заболеваемости COVID-19',
          description: `С.-ПЕТЕРБУРГ, 19 ноя - РИА Новости. Власти надеются, что Санкт-Петербург вышел на плато по госпитализации пациентов с коронавирусом.
          "Вроде бы сейчас образовалось некоторое плато, если брать количество госпитализаций. Надежда такая, что вдруг после этого мы вниз пойдем",
          - сказал вице-губернатор города Евгений Елин в эфире телеканала 78.`,
          date: '2020-11-19T18:29:00.000Z'
        },
      ])
    }, 1000);
  });
