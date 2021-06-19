var mqtt = require('mqtt')
var client = mqtt.connect('wxs://test.mosquitto.org')

client.on("connect", function(){
    client.subscribe('ChessTest', function (err) {
        if (!err) {
          client.publish('presence', 'Hello mqtt');
          console.log("subscription to "+ "ChessTest");
        }
      })
})
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
  })