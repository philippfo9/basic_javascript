function life(message, ps) {
    console.log("life " + this.verb + " " + message);
    console.log("ps: ",ps);
};

var life2 = function(message, ps) {
    console.log("life " + this.verb + " " + message);
    console.log("ps: ",ps);
};

life.apply({verb: 'can kick'}, ['asses', 'true']);
life2.apply({verb: 'can kick'}, ['asses', 'true']);