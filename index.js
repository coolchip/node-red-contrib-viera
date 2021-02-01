'use strict';

const Viera = require('viera.js');

module.exports = function (RED) {
    function VieraReadNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var tv = new Viera(config.host);

        node.on('input', function (msg) {
            var functionName = config.function || msg.function;
            if (typeof (functionName) !== 'undefined') {
                return tv[functionName]((data) => {
                    node.send({
                        payload: data
                    });
                });
            }
            RED.log.error(`Function ${functionName} not defined.`);
        });
    }
    RED.nodes.registerType("viera read", VieraReadNode);

    function VieraWriteNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var tv = new Viera(config.host);

        node.on('input', function (msg) {
            var functionName = config.function || msg.function;
            if (typeof (functionName) !== 'undefined') {
                return tv[functionName](msg.payload);
            }
            RED.log.error(`Function ${functionName} not defined.`);
        });
    }
    RED.nodes.registerType("viera write", VieraWriteNode);
}