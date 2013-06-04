// Array Remove - By John Resig (MIT Licensed)
HTMLCollection.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var counter = 0;
var base_speed = 300;
var running = true;
//var t = 
function add() {
	var base = document.getElementById("chi");
	var n = base.cloneNode(true);
	n.style.display = "";
    n.id = "chi" + (++counter);
    var timer = getRandomInt(5,20)/10;
    n.classList.add("class_chi");
    n.style.transitionDuration = timer+"s";
    n.style.transitionProperty = "left,right,top,bottom";
    n.style.transitionTimingFunction = "linear";
    var pos = getRandomInt(0, (window.innerHeight+window.innerWidth));
    var pos2 = getRandomInt(0, (window.innerHeight+window.innerWidth));
    var pos3 = getRandomInt(0, (window.innerHeight+window.innerWidth));
    var d1 = Math.abs(window.innerHeight - pos);
    var d2 = Math.abs(window.innerHeight - pos2);
    var d3 = Math.abs(window.innerHeight - pos3);
    if(d1 < d2 && d1 < d3 ) {
        //nothing at all, pos is fine as is
    }
    else if( d2 < d1 && d2 < d3) {
        pos = pos2;
    }else {
        pos = pos3;
    }
    if(pos > window.innerWidth) { 
        var off = (pos - window.innerWidth);
        n.style.top =  off +"px";
        n.style.left = window.innerWidth +"px";

        n.targetTop = window.innerHeight;
        n.targetLeft = window.innerWidth - (window.innerHeight - off);
    }else{
        n.style.left = pos+"px";
        n.style.top = "-200px";
        if(pos > window.innerHeight) {
            n.targetTop = window.innerHeight;
            n.targetLeft = pos - window.innerHeight;
        } else {
            n.targetTop = pos;
            n.targetLeft = -200;
        }
    }
    
    /*n.style.left = left+"px";
    n.style.top = top+"px";*/
    var glow = n.getElementById("glow");
    glow.style.stroke = "#" + color() + color() + color();
    document.body.appendChild(n);
    setTimeout(function() {
        n.style.left = n.targetLeft +"px";
        n.style.top = n.targetTop +"px";
    },10);
    setTimeout(function() {
        document.body.removeChild(n);
        add();
    },timer*1000);
}

function color() {
    return getRandomInt(100,255).toString(16).toUpperCase();
}

function count() {
    var n = document.getElementById("count");
    var c = Number(n.innerHTML);
    n.innerHTML = (++c).toString();
}

function reset() {
    var n = document.getElementById("count");
    n.innerHTML = "0";
    var elems = document.getElementsByClassName("class_chi");
    for(var i = 0; i < elems.length; i++) {
        document.body.removeChild(elems[i]);
    }
}
