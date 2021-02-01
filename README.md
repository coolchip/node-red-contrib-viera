## node-red-contrib-viera
[![npm version](https://badge.fury.io/js/node-red-contrib-viera.svg)](https://badge.fury.io/js/node-red-contrib-viera)
[![Dependency Status](https://david-dm.org/coolchip/node-red-contrib-viera.svg)](https://david-dm.org/coolchip/node-red-contrib-viera)
[![licence](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/node-red-contrib-viera)

#### Node-RED Node, that controls Panasonic Viera TVs.

### Install
Just run
```
    npm install node-red-contrib-viera
```

### How to use
Enter your IP and choose a function.

### sendCommand()

With the sendCommand() function you can send any command you like from this list:
https://github.com/samuelmatis/viera.js/blob/master/codes.txt

### Example
```text
[{"id":"c44688bd.6555e8","type":"viera read","z":"e8197a65.952f88","name":"getVolume","host":"192.168.178.27","function":"getVolume","x":310,"y":40,"wires":[["e373943a.349f88"]]},{"id":"fe6eb03f.44f46","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":40,"wires":[["c44688bd.6555e8"]]},{"id":"85342463.19ffd8","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"10","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":140,"wires":[["4e317420.f106ac"]]},{"id":"4e317420.f106ac","type":"viera write","z":"e8197a65.952f88","name":"setVolume","host":"192.168.178.27","function":"setVolume","x":310,"y":140,"wires":[]},{"id":"e373943a.349f88","type":"debug","z":"e8197a65.952f88","name":"","active":true,"console":"false","complete":"false","x":490,"y":40,"wires":[]},{"id":"e7d3220d.35c43","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"info","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":320,"wires":[["194f9c86.4708f3"]]},{"id":"194f9c86.4708f3","type":"viera write","z":"e8197a65.952f88","name":"sendCommand","host":"192.168.178.27","function":"sendCommand","x":300,"y":320,"wires":[]},{"id":"330e8f43.08859","type":"inject","z":"e8197a65.952f88","name":"true","topic":"","payload":"true","payloadType":"bool","repeat":"","crontab":"","once":false,"x":110,"y":420,"wires":[["6fda11b.39cc9f"]]},{"id":"6fda11b.39cc9f","type":"viera write","z":"e8197a65.952f88","name":"setMute","host":"192.168.178.27","function":"setMute","x":280,"y":420,"wires":[]},{"id":"a405fa6a.1143d8","type":"inject","z":"e8197a65.952f88","name":"false","topic":"","payload":"false","payloadType":"bool","repeat":"","crontab":"","once":false,"x":110,"y":460,"wires":[["6fda11b.39cc9f"]]},{"id":"811e854f.285468","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"power","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":360,"wires":[["194f9c86.4708f3"]]},{"id":"16386dbb.a0b2d2","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"15","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":180,"wires":[["4e317420.f106ac"]]},{"id":"1a34d858.78a458","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"20","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":220,"wires":[["4e317420.f106ac"]]},{"id":"413e5735.0928a8","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"25","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":260,"wires":[["4e317420.f106ac"]]},{"id":"33be015b.76494e","type":"viera read","z":"e8197a65.952f88","name":"getMute","host":"192.168.178.27","function":"getMute","x":300,"y":80,"wires":[["e373943a.349f88"]]},{"id":"858b7848.fab8e8","type":"inject","z":"e8197a65.952f88","name":"","topic":"","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":80,"wires":[["33be015b.76494e"]]}]
```
