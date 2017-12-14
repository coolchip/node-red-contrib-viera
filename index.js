'use strict';

const Viera = require('viera.js');

module.exports = function (RED) {

    function VieraReadNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var tv = new Viera(config.host);

        node.on('input', function (msg) {
            tv[config.function](function (data) {
                node.send({payload:data});
            });
        });
    }
    RED.nodes.registerType("viera read", VieraReadNode);

    function VieraWriteNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var tv = new Viera(config.host);
     
        node.on('input', function (msg) {
            var parameterName = config.parameter || msg.parameter;

            //tv.sendCommand("info");
            //tv.setVolume(19);
            //tv.setMute(true);
            tv[config.function](msg.payload);
            //node.send(msg);
        });
    }
    RED.nodes.registerType("viera write", VieraWriteNode);
}
