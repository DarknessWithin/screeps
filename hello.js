var target = Game.creeps["Ruby"].pos.findClosestByPath(FIND_STRUCTURES, {
        filter: function(object){
            return (object.hits < object.hitsMax - 500);
        }
});
console.log(target)