const { Apidaze } = require('@apidaze/node')

/**
 * Send SMS
 * @param {*} params { from, to, message}
 */
module.exports.sendSms = async params => {
  console.log('sendSms', params)

  const { apiKey, apiSecret } = params
  const { from, to, message } = params

  const apidaze = new Apidaze(apiKey, apiSecret)

  const response = await apidaze.messages
    .send(from, to, message)
    .catch(error => {
      console.log('Error sending SMS', error)
    })

  console.log('SMS sent', response)

  const { statusCode, body } = response

  if (statusCode !== 200) throw new Error(body?.message || 'Error sending SMS')

  return response
}
