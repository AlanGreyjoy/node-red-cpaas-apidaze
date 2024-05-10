module.exports.formatPhoneNumber = phoneNumber => {
  if (!phoneNumber) {
    return null
  }

  // Remove all non-digit characters
  let formattedPhoneNumber = phoneNumber.replace(/\D/g, '')

  return formattedPhoneNumber
}
