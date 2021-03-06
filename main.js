var spawnerCode = require("spawner")
var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder")
var roleRepairer = require("role.repairer")


module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log("Clearing non-existing creep memory:", name);
        }
    }

    for (var name in Game.spawns) {
        var spawnername = Game.spawns[name]
        spawnerCode.run(spawnername)
    }

    
    

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == "harvester") {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == "upgrader") {
            roleUpgrader.run(creep);
        }
        if (creep.memory.role == "builder") {
            roleBuilder.run(creep)
        }
        if (creep.memory.role == "repairer") {
            roleRepairer.run(creep)
        }
    }
}