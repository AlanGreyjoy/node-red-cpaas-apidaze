module.exports = function (RED) {
  function ApidazeConfig(n) {
    RED.nodes.createNode(this, n)

    this.appId = n.appId
    this.apiKey = n.apiKey
    this.apiSecret = n.apiSecret
  }

  RED.nodes.registerType('apidaze-config', ApidazeConfig)
}
