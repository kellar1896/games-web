import moment from "moment";

export function camelCaseToReadable(camelCaseString: string) {
    let readableString = camelCaseString.replace(/([A-Z])/g, ' $1');
    readableString = readableString.charAt(0).toUpperCase() + readableString.slice(1);
    return readableString;
  }

export function convertIsoToDate(date: string) {
    return moment(date).format('DD/MM/YYYY');
}

export function formatString(str: string) {
  var words = str.split('_');
  
  var formatted = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  return formatted;
}

export function reverseFormatString(str: string) {
  var words = str.split(' ');
  
  var reversed = words.map(function(word) {
    return word.charAt(0).toLowerCase() + word.slice(1);
  }).join('_');

  return reversed;
}

export function createId() {
  let result = '';
  const length = 5;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}