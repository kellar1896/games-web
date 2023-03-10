import moment from "moment";

export function camelCaseToReadable(camelCaseString: string) {
    // Replace all uppercase letters with a space followed by the lowercase version
    let readableString = camelCaseString.replace(/([A-Z])/g, ' $1');
    // Capitalize the first letter of the string
    readableString = readableString.charAt(0).toUpperCase() + readableString.slice(1);
    // Return the resulting string
    return readableString;
  }

export function convertIsoToDate(date: string) {
    // convert iso utc string date to redeable format
    return moment(date).format('DD/MM/YYYY');
}