var mqtt = require('mqtt')
var client = mqtt.connect('wxs://test.mosquitto.org')

client.on("connect", function(){
    setInterval(function(){
        var random  = Math.random()*20;
        console.log(random);
        client.publish("ChessTest", random.toString())
    }),3000;

})