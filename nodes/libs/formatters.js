/**
 * Formats a phone number for use with the Apidaze API
 * @param {*} phoneNumber
 * @returns
 */
module.exports.formatPhoneNumber = phoneNumber => {
  if (!phoneNumber)
    throw new Error('There was no phone number provided to format!')

  // Remove all non-numeric characters
  let formatted = phoneNumber.replace(/\D/g, '')

  // Ensure the number is 10 digits
  if (formatted.length !== 10)
    throw new Error('The phone number provided is not 10 digits long!')

  // Add the country code
  formatted = `1${formatted}`

  return formatted
}
