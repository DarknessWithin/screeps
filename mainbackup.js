var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder")
var spawnerCode = require("spawner")

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log("Clearing non-existing creep memory:", name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == "harvester");
    console.log("Harvesters: " + harvesters.length);

    if(harvesters.length < 2) {
        var newName = Game.spawns["Home"].createCreep([WORK,CARRY,MOVE], undefined, {role: "harvester", type: "harvester basic"});
        console.log("Spawning new harvester: " + newName);
    }
    
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == "upgrader");
    console.log("Upgraders: " + upgraders.length);

    if(upgraders.length < 1) {
        var newName = Game.spawns["Home"].createCreep([WORK,CARRY,MOVE], undefined, {role: "upgrader"});
        console.log("Spawning new upgrader: " + newName);
    }
    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == "builder");
    console.log("Builders: " + builders.length);
    
    if(Game.spawns["Home"].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns["Home"].spawning.name];
        Game.spawns["Home"].room.visual.text(
            "🛠️" + spawningCreep.memory.role,
            Game.spawns["Home"].pos.x + 1, 
            Game.spawns["Home"].pos.y, 
            {align: "left", opacity: 0.8});
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
    }
}