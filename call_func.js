var newScope = {lol: "lololol"};

var tryFunc = function(question, prefix) {
    console.log(prefix+", " +question+"? ", this.lol);
};

function tryFunc2(question, prefix) {
    console.log(prefix+", " +question+"? ", this.lol);
};

tryFunc.call(newScope, "is there sth to log", "lol");
tryFunc2.call(newScope, "is there sth to log", "lol");
