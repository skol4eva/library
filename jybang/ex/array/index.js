/**
 * Created by USER on 2016-03-31.
 */

function Test(){
    this.store = [];
}

Test.prototype = {
    add: function(value){
        this.reMake(document.querySelectorAll(value));
        this.store.push();
    },
    reMake: function(node){
        for(var i= 0, max = node.length; i < max; i++){
            console.log(i);
        }
    },
    get: function(){
        return this.store.pop();
    },
    size: function(){
        return this.store.length;
    },
    check: function(){
        return this.store;
    }
};

//Test.prototype.constructor = Test;

var test1 = new Test();


test1.add('a');
//console.log(test1.check());