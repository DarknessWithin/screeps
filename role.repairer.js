var roleRepairer = {
    run: function(creep) {

	if(creep.memory.repairing && creep.carry.energy == 0) {
	creep.memory.repairing = false;
	creep.say('🔄 harvest');
	}
	if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
	    creep.memory.repairing = true;
	    creep.say('⚡ repair');
	}

	if(creep.memory.repairing) {
	    //Finds closest structure missing at least 500 HP
	   var target = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
		filter: function(object){
		    return (object.hits < object.hitsMax - 500);
		     }
		});		
	    if(target != null) {
		if(creep.repair(target) == ERR_NOT_IN_RANGE) {
		    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
		}
	    } else {
		var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
		    filter: function(object){
		      return (object.hits < object.hitsMax - 500);
		     }
		});
	    }
	    if(target != null) {
		if(creep.repair(target) == ERR_NOT_IN_RANGE) {
		    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
		}
	    }
	}
	else {
	    var source = creep.pos.findClosestByPath(FIND_SOURCES);
	if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
	    creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
	}
	}
    }
    
};

module.exports = roleRepairer;