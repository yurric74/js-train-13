// Завдання 1
/**
 * Функція `complexConvert` отримує об'єкт з числовими значеннями і збільшує їх на 1.
 *
 *  data - json дані для обробки.
 * Повертає - json дані в яких всі числові значення збільшено на 1.
 */
function complexConvert(data) {
  const obj = {};// Створюємо новий порожній об'єкт для збереження результату.
 const parsData = JSON.parse(data);// Перетворюємо json дані в об'єкт та отримуємо всі ключі об'єкта.
  for (const key in parsData) {// Обходимо всі ключі та перевіряємо значення.
  if (typeof parsData[key] === "number") {obj[key] = parsData[key] +1;}// Якщо значення є числом, збільшуємо його на 1.
  // Якщо значення не є числом, просто копіюємо його у новий об'єкт без змін.
   else {obj[key] = parsData[key];}}// Повертаємо оброблений об'єкт.
    return JSON.stringify(obj);
  }

console.log("Завдання: 1 ==============================");
const data = {
  name: "John",
  age: 30,
  city: "New York",
  grades: {
    math: 90,
    science: 80,
    history: 70,
  },
};
console.log(complexConvert(JSON.stringify(data)));
// Виведе
// {"name":"John","age":31,"city":"New York","grades":{"math":90,"science":80,"history":70}}

// Завдання 2

/**
 * Функція `manipulateUrl` приймає URL у вигляді рядка і виконує над ним різні операції.
 *
 * url - URL у вигляді рядка.
 *
 * Повертає об'єкт, що містить різні властивості URL.
 *  href: // Повний URL.
    protocol: // Протокол URL.
    host:  // Хост URL.
    pathname // Шлях URL.
    search // Рядок запиту URL.
    params: Параметри URL у вигляді масиву пар [ключ, значення].
 */
function manipulateUrl(url) {
  const urlObj=new URL(url);// Створюємо новий об'єкт URL.
  urlObj.protocol = "https";// Змінюємо протокол URL на https.
  urlObj.host = "newhost.com";// Змінюємо хост URL на 'newhost.com'.
  urlObj.searchParams.set("newParam", "newValue");// Додаємо параметр 'newParam' зі значенням 'newValue' до URL.
  if (urlObj.searchParams.has("oldParam")) {// Видаляємо параметр 'oldParam' з URL, якщо він існує.
    urlObj.searchParams.delete("oldParam");}// Повертаємо об'єкт, який містить різні властивості URL.
    return {href:urlObj.href,protocol: urlObj.protocol,host: urlObj.host,pathname: urlObj.pathname,search: urlObj.search,params: [...urlObj.searchParams.entries()],};
  }

console.log("Завдання: 2 ==============================");

// Приклад використання функції manipulateUrl
let url = "http://example.com/path?param1=value1&param2=value2";

console.log(manipulateUrl(url));
// Виведе
// {
//   href: 'https://newhost.com/path?param1=value1&param2=value2&newParam=newValue',
//   protocol: 'https:',
//   host: 'newhost.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2&newParam=newValue',
//   params: [
//     [ 'param1', 'value1' ],
//     [ 'param2', 'value2' ],
//     [ 'newParam', 'newValue' ]
//   ]
// }

// Завдання 3

/**
 * Функція `searchParamsURL` створює новий об'єкт URL з вхідної URL-адреси та повертає об'єкт з параметрами пошуку URL.
 *  url - Вхідна URL-адреса для аналізу.
 *  Повертає об'єкт з параметрами пошуку URL.
 */
function searchParamsURL(url) {
  const urlObj = new URL(url);// Створення нового об'єкта URL з вхідного рядка
  const searchParams = urlObj.searchParams;// Отримання об'єкта URLSearchParams з властивості 'searchParams' об'єкта URL
  const paramsMap = new Map();// Створення порожнього словника для збереження параметрів пошуку
  for (const param of searchParams) {// Перебір кожного параметра пошуку з 'searchParams' та додавання їх до словника 'params'
    paramsMap.set(param[0], param[1]);}// Кожен 'param' - це масив, де [0] - ім'я параметра, а [1] - значення параметра
    return paramsMap; // Повертаємо словник
}

console.log("Завдання: 3 ==============================");

// Демонстрація використання функції:
console.log(
  searchParamsURL(
    "https://example.com/pathname?param1=value1&param2=value2&param3=value3"
  )
);
// Виведе
// Map(3) {
//   'param1' => 'value1',
//   'param2' => 'value2',
//   'param3' => 'value3'
// }

// Завдання 4

/**
 * Функція `manipulateSearchParams` повинна приймати об'єкт з параметрами та нову URL-адресу.
 * paramsObj (об'єкт) - об'єкт, який містить параметри пошуку.
 * newUrl (рядок) - нова URL-адреса.
 *
 * Функція повертає нову URL-адресу з властивістю searchParams, оновленою за допомогою параметрів з paramsObj.
 */
function manipulateSearchParams(paramsObj, newUrl) {
  const urlObj = new URL(newUrl);// Створюємо новий об'єкт URL з нової URL-адреси.
  for (const key of Object.keys(paramsObj)) {urlObj.searchParams.set(key, paramsObj[key]);}// Використовуючи метод 'keys' з об'єкта Object, отримуємо всі ключі paramsObj.
  // За допомогою циклу 'for of' перебираємо всі ключі та додаємо параметри пошуку до urlObj.
  return urlObj.href;// Повертаємо нову URL-адресу в рядковому форматі.
}

// Приклад використання функції manipulateSearchParams
console.log("Завдання: 4 ==============================");

console.log(
  manipulateSearchParams(
    { param1: "value1", param2: "value2" },
    "https://example.com/pathname"
  )
);
// Виведе: https://example.com/pathname?param1=value1&param2=value2

// Завдання 5

/**
 * Функція `deleteSearchParams` повинна приймати масив ключів параметрів і URL-адресу.
 * keys (масив) - масив, який містить ключі параметрів пошуку для видалення.
 * url (рядок) - URL-адреса.
 *
 * Функція повертає нову URL-адресу, з якої були видалені вказані параметри пошуку.
 */
function deleteSearchParams(keys, url) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з URL-адреси.
  for (const key of keys) {urlObj.searchParams.delete(key);}// За допомогою циклу 'for of' перебираємо всі ключі та видаляємо відповідні параметри пошуку з urlObj.
  return urlObj.href; // Повертаємо нову URL-адресу в рядковому форматі.
}

// Приклад використання функції deleteSearchParams
console.log("Завдання: 5 ==============================");

console.log(
  deleteSearchParams(
    ["param1", "param2"],
    "https://example.com/pathname?param1=value1&param2=value2"
  )
);
// Виведе: https://example.com/pathname

// Завдання 6

/**
 * Функція `createURLWithParams` приймає об'єкт параметрів пошуку та базову URL-адресу.
 * params (об'єкт) - об'єкт, ключі та значення якого стануть параметрами пошуку нової URL-адреси.
 * url (рядок) - базова URL-адреса.
 *
 * Функція повертає нову URL-адресу, до якої додані параметри пошуку з об'єкта params.
 */
function createURLWithParams(params, url) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з базової URL-адреси.
  for (const key1 in params) {// За допомогою циклу 'for in' перебираємо всі ключі та значення об'єкта params та додаємо їх як параметри пошуку до urlObj.
  urlObj.searchParams.set(key1, params[key1]);}// Повертаємо нову URL-адресу в рядковому форматі.
  return urlObj.href; 
}

// Приклад використання функції createURLWithParams
console.log("Завдання: 6 ==============================");

console.log(
  createURLWithParams(
    { param1: "value1", param2: "value2" },
    "https://example.com"
  )
);
// Виведе: https://example.com/?param1=value1&param2=value2

// Завдання 7

/**
 * Функція `updateURLHash` приймає URL-адресу та рядок, і оновлює значення хеша в URL-адресі.
 * url (рядок) - URL-адреса, яку треба оновити.
 * hash (рядок) - нове значення хеша.
 *
 * Функція повертає нову URL-адресу з оновленим хешем.
 */
function updateURLHash(url, hash) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з вхідної URL-адреси.
  urlObj.hash = hash;// Оновлюємо значення хеша в URL-адресі.
  return urlObj.href;// Повертаємо нову URL-адресу в рядковому форматі.
}

// Приклад використання функції updateURLHash
console.log("Завдання: 7 ==============================");

console.log(updateURLHash("https://example.com", "newHash"));
// Виведе: https://example.com/#newHash

// Завдання 8

/**
 * Функція `appendSearchParam` приймає URL-адресу, ключ і значення та додає новий параметр пошуку до URL-адреси.
 * url (рядок) - URL-адреса, до якої треба додати новий параметр пошуку.
 * key (рядок) - ключ нового параметра пошуку.
 * value (рядок) - значення нового параметра пошуку.
 *
 * Функція повертає нову URL-адресу з доданим параметром пошуку.
 */
function appendSearchParam(url, key, value) {
  const urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  urlObj.searchParams.append(key, value);// Додаємо новий параметр пошуку до URL-адреси.
  return urlObj.href;// Повертаємо нову URL-адресу в рядковому форматі.
}

// Приклад використання функції appendSearchParam
console.log("Завдання: 8 ==============================");

console.log(appendSearchParam("https://example.com", "newParam", "newValue"));
// Виведе: https://example.com/?newParam=newValue

// Завдання 9
/**
 * Функція `modifyURLParameters` приймає URL та словник з параметрами пошуку.
 * Функція додає ці параметри до URL, а якщо такий параметр вже існує, замінює його.
 *
 * url - URL, який треба змінити.
 *  params - Словник з параметрами пошуку.
 * Повертається - Нова URL-адреса з оновленими параметрами пошуку.
 */
function modifyURLParameters(url, params) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з вхідної URL-адреси.
  for (const key in params) {const value = params[key];// Перебираємо словник params за допомогою for in
  if (urlObj.searchParams.has(key)) {urlObj.searchParams.set(key, value);} // Отримаємо значення словника по ключу
  else {urlObj.searchParams.append(key, value);}}// Якщо параметр вже існує, метод set замінює його новим значенням.
  // Якщо параметр не існує, метод set додає його.
  return urlObj.href;// Повертаємо нову URL-адресу в рядковому форматі.
}

console.log("Завдання: 9 ==============================");

// Приклад використання функції modifyURLParameters
let modifiedURL = modifyURLParameters("https://example.com/?param1=oldValue1", {
  param1: "newValue1",
  param2: "newValue2",
});
console.log(modifiedURL);
// Виведе: https://example.com/?param1=newValue1&param2=newValue2

// Завдання 10
/**
 * Функція `checkURLParameters` приймає URL та множину параметрів пошуку.
 * Функція перевіряє, чи є ці параметри в URL.
 *
 * url - URL, який потрібно перевірити.
 *  params - Множина параметрів, які потрібно перевірити.
 * Повертається - Об'єкт, ключі якого відповідають ключам вхідного об'єкта,
 *                    а значеннями є булеві значення, що вказують на наявність відповідного параметра в URL.
 */
function checkURLParameters(url, params) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з вхідної URL-адреси.
  const results = {}; // Створюємо новий об'єкт для зберігання результатів.
  for (const param of params) {results[param] = urlObj.searchParams.has(param);} // Перебираємо елементи множини params за допомогою for of.
  // Додаємо новий ключ в результат з булевим значенням, яке вказує, чи є параметр в URL.
  return results; // Повертаємо об'єкт з результатами.
}

console.log("Завдання: 10 ==============================");

// Приклад використання функції checkURLParameters
let params = new Set(["param1", "param2", "param3", "param4"]);

console.log(
  checkURLParameters(
    "https://example.com/?param1=value1&param2=value2&param3=value3",
    params
  )
);
// Виведе: { param1: true, param2: true, param3: true, param4: false }

// Завдання 11

/**
 * Функція `processURL` приймає URL та об'єкт з параметрами та налаштуваннями для обробки URL.
 * url (рядок) - URL, який потрібно обробити.
 * options (об'єкт) - об'єкт, який містить параметри та налаштування для обробки URL.
 *
 * Функція повертає новий URL, який було сформовано на основі вхідного URL і параметрів обробки.
 */
function processUrl(url, options) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з вхідної URL-адреси.
  if (options.searchParams) {for (const key in options.searchParams) {urlObj.searchParams.append(key, options.searchParams[key]);}}// Перевіряємо, чи в об'єкті 'options' є параметри пошуку.
  // Якщо є, перебираємо ці параметри за допомогою циклу 'for in'.
  if (options.protocol) {urlObj.protocol = options.protocol;}// Для кожного ключа параметру додаємо його та відповідне значення до об'єкта 'urlObj' за допомогою методу 'append'.
  // Перевіряємо, чи в об'єкті 'options' є протокол.
  if (options.host) {urlObj.host = options.host;}// Якщо є, змінюємо протокол 'urlObj' на протокол з 'options'.
  // Перевіряємо, чи в об'єкті 'options' є хост.
  // Якщо є, змінюємо хост 'urlObj' на хост з 'options'.
  return urlObj.toString();// Повертаємо 'urlObj' у вигляді рядка за допомогою методу 'toString'.
}

// Приклад використання функції processURL
console.log("Завдання: 11 ==============================");

console.log(
  processUrl("https://example.com/path", {
    searchParams: { param1: "value1", param2: "value2" },
    protocol: "http:",
    host: "newexample.com",
  })
);
// Виведе: 'http://newexample.com/path?param1=value1&param2=value2'

// Завдання 12
/**
 * Функція `manipulateQuery` отримує URL та словник з додатковими налаштуваннями та працює над пошуковими параметрами URL.
 *
 * url - URL для обробки.
 * options - Словник з налаштуваннями. Включає ключі `append` та `delete`.
 *
 * Повертається - Новий URL з модифікованими пошуковими параметрами.
 */
function manipulateQuery(url, options) {
  const urlObj = new URL(url); // Створюємо новий об'єкт URL з вхідної URL-адреси.
  if (options.has("append")) {const appendParams = options.get("append");// Якщо в словнику `options` є ключ `append`...
  for (const [key, value] of appendParams) {urlObj.searchParams.set(key, value);}}// ...перебираємо його ключі та значення за допомогою циклу for...of.
  // Додаємо кожний ключ і значення до об'єкта `searchParams` в URL.
  if (options.has("delete")) {const deleteParams = options.get("delete");// Якщо в словнику `options` є ключ `delete`...
  for (const param of deleteParams) {urlObj.searchParams.delete(param);}}// ...перебираємо його значення за допомогою циклу for...of.
  // Видаляємо кожний ключ з об'єкта `searchParams` в URL.
  return urlObj.toString();// Повертаємо новий URL як рядок.
}

console.log("Завдання: 12 ==============================");

// Приклад використання функції manipulateQuery
let options = new Map([
  [
    "append",
    new Map([
      ["param3", "value3"],
      ["param4", "value4"],
    ]),
  ],
  ["delete", ["param1", "param2"]],
]);

console.log(
  manipulateQuery(
    "https://example.com/path?param1=value1&param2=value2",
    options
  )
);
// Виведе: 'https://example.com/path?param3=value3&param4=value4'

// Завдання 13

/**
 * Функція `getUrlData` приймає URL у вигляді рядка і повертає інформацію про URL.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає об'єкт, що містить наступні ключі:
 * - 'origin': походження URL.
 * - 'hostname': ім'я хоста URL.
 * - 'port': порт URL.
 * - 'username': ім'я користувача в URL.
 * - 'password': пароль в URL.
 */
function getUrlData(url) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з вхідної URL-адреси.
  const data = {origin: urlObj.origin, hostname: urlObj.hostname,port: urlObj.port,// Повертаємо об'єкт з відповідними даними.
  username: urlObj.username, password: urlObj.password,};
  return data;
}

// Приклад використання функції getUrlData
console.log("Завдання: 13 ==============================");
console.log(getUrlData("https://username:password@example.com:8080/path"));
// Виведе:
// {
//   origin: 'https://example.com:8080',
//   hostname: 'example.com',
//   port: '8080',
//   username: 'username',
//   password: 'password'
// }

// Завдання 14

/**
 * Функція `sortUrlParams` приймає URL і повертає новий URL з відсортованими пошуковими параметрами.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає новий URL з відсортованими пошуковими параметрами за ключами у порядку зростання.
 */
function sortUrlParams(url) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з вхідної URL-адреси.
  const paramsArray = Array.from(urlObj.searchParams.entries());// Отримуємо масив з ключами і значеннями параметрів за допомогою методу 'entries'.
  paramsArray.sort((a, b) => a[0].localeCompare(b[0]));// Сортуємо масив за ключами у порядку зростання.
  for (const [key, value] of paramsArray) {urlObj.searchParams.append(key, value);}// Очищуємо пошукові параметри URL.
  // Додаємо відсортовані параметри до URL.
  return urlObj.toString();// Повертаємо новий URL як рядок.
}

// Приклад використання функції sortUrlParams
console.log("Завдання: 14 ==============================");
console.log(
  sortUrlParams("https://example.com/path?param2=value2&param1=value1")
);
// Виведе: 'https://example.com/path?param1=value1&param2=value2'

// Завдання 15

/**
 * Функція `getURLValues` приймає URL і повертає масив значень пошукових параметрів.
 * url - URL-адреса для аналізу.
 * Повертаємо - Масив значень пошукових параметрів.
 */
function getURLValues(url) {
  const urlObj = new URL(url);// Створюємо новий об'єкт URL з вхідною URL-адресою.
  const searchParams = urlObj.searchParams;// Отримуємо об'єкт `URLSearchParams` з пошуковими параметрами.
  const paramKeys = Array.from(searchParams.keys());// Отримуємо масив ключів пошукових параметрів.
  const valuesArray = [];// Масив для збереження значень пошукових параметрів.
  for (const key of paramKeys) {const valuesForKey = searchParams.getAll(key);// Перебираємо ключі пошукових параметрів.
  valuesArray.push(...valuesForKey);}// Отримуємо всі значення для даного ключа за допомогою методу `getAll`.
  // Додаємо значення до масиву.
  return valuesArray;// Повертаємо масив значень пошукових параметрів.
}

// Приклад використання функції getURLValues
console.log("Завдання: 15 ==============================");
console.log(
  getURLValues(
    "https://example.com/path?param1=value1&param2=value2&param3=value3"
  )
);

// Завдання 16

/**
 * Функція `getUrlKeys` приймає URL і повертає масив з ключами пошукових параметрів.
 * @url (рядок) - URL-адреса для аналізу.
 *
 * Функція повертає масив, що містить усі ключі пошукових параметрів.
 */
function getUrlKeys(url) {
  const urlObj = new URL(url); const searchParams = urlObj.searchParams;// Створюємо новий об'єкт URL з вхідної URL-адреси.
  const paramKeysArray = Array.from(searchParams.keys());// Отримуємо масив зі всіма ключами пошукових параметрів за допомогою методу 'keys'.
  return paramKeysArray;// Повертаємо масив з ключами.
}

// Приклад використання функції getUrlKeys
console.log("Завдання: 16 ==============================");
console.log(getUrlKeys("https://example.com/path?param1=value1&param2=value2"));
// Виведе: [ 'param1', 'param2' ]
