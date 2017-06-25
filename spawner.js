var spawnerCode = {
    
    run: function(spawner) {
            /*if (Game.time%5 == 0) {
                var isTime = true;}
                else{
                var isTime = false;
            }*/
            var isTime = true;
            //basic harvester spawning; CARRY MOVE WORK; cost: 200
            var harvestersbasic = _.filter(Game.creeps, (creep) => creep.memory.type == 'harvester basic');
            if (harvestersbasic.length != 0 && isTime && Memory.numbers.prevHBcount !== harvestersbasic.length) {
                console.log("Basic Harvesters: " + harvestersbasic.length)
            }
            Memory.numbers.prevHBcount = harvestersbasic.length
            
            if(harvestersbasic.length < 2) {
            var newName = spawner.createCreep([WORK,CARRY,MOVE], undefined, {role: "harvester", type: "harvester basic"});
            console.log("Spawning new basic harvester: " + newName);
            }
            
            //basic upgrader spawning; CARRY MOVE WORK; cost: 200
            var upgradersbasic = _.filter(Game.creeps, (creep) => creep.memory.type == "upgrader basic");
            if (upgradersbasic.length != 0 && isTime && Memory.numbers.prevUBcount !== upgradersbasic.length) {
                console.log("Basic Upgraders: " + upgradersbasic.length)
            }
            Memory.numbers.prevUBcount = upgradersbasic.length

            if(upgradersbasic.length < 2) {
                var newName = spawner.createCreep([WORK,CARRY,MOVE], undefined, {role: "upgrader", type: "upgrader basic"});
                console.log("Spawning new basic upgrader: " + newName);
            }
            
            //basic builder spawning; ; CARRY MOVE WORK; cost: 200
            var buildersbasic = _.filter(Game.creeps, (creep) => creep.memory.type == "builder basic");
            if (buildersbasic.length != 0 && isTime && Memory.numbers.prevBBcount !== buildersbasic.length) {
                console.log("Basic Builders " + buildersbasic.length);
            }
            Memory.numbers.prevBBcount = buildersbasic.length
            
            if (buildersbasic.length < 2) {
                var newName = spawner.createCreep ([WORK, CARRY, MOVE], undefined, {role: "builder", type: "builder basic"})
                console.log ("Spawning new basic builder: " + newName)
            }
            
            //basic repairer spawning; CARRY MOVE WORK; cost: 200
            var repairersbasic = _.filter(Game.creeps, (creep) => creep.memory.type == "repairer basic");
            if (repairersbasic.length != 0 && isTime && Memory.numbers.prevRBcount != repairersbasic.length) {
                console.log("Basic Repairers " + repairersbasic.length);
            }
            Memory.numbers.prevRBcount = repairersbasic.length
            
            if (repairersbasic.length < 2) {
                var newName = spawner.createCreep ([WORK, CARRY, MOVE], undefined, {role: "repairer", type: "repairer basic"})
                console.log ("Spawning new basic repairer: " + newName)
            }            
            
            //image
            if(Game.spawns["Home"].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns["Home"].spawning.name];
        Game.spawns["Home"].room.visual.text(
            "Spawning" + spawningCreep.memory.type,
            Game.spawns["Home"].pos.x + 1, 
            Game.spawns["Home"].pos.y, 
            {align: "left", opacity: 0.8});
    }
        
    } 
};

module.exports = spawnerCode;
