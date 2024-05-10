module.exports = function (RED) {
  const apidaze = require('./libs/apidaze')
  const { formatPhoneNumber } = require('./libs/formatters')

  function SendSms(config) {
    RED.nodes.createNode(this, config)

    this.apidazeConfig = RED.nodes.getNode(config.apidazeConfig)

    let node = this

    node.on('input', async msg => {
      const { appId, apiKey, apiSecret } = node.apidazeConfig

      const {
        to = msg.payload.to || config.to,
        from = msg.payload.from || config.from,
        message = msg.payload.message || config.message
      } = msg.payload

      if (!appId || !apiKey || !apiSecret) {
        node.error('Apidaze credentials not set')

        return
      }

      node.status({ fill: 'blue', shape: 'dot', text: 'Sending SMS...' })

      await apidaze.sms
        .sendSms({
          appId,
          apiKey,
          apiSecret,
          to: `1${to}`,
          from: `1${from}`,
          message: message
        })
        .catch(err => {
          node.error(error)
          node.status({ fill: 'red', shape: 'dot', text: 'Error sending SMS' })
        })

      node.status({ fill: 'green', shape: 'dot', text: 'SMS sent!' })
      node.send(msg)
      node.status({})
    })
  }

  RED.nodes.registerType('send-sms', SendSms)
}
