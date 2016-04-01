// Array Remove - By John Resig (MIT Licensed)
HTMLCollection.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};


var counter = 0;
var base_speed = 300;
var running = true;
//var t = 
function add() {
	var base = document.getElementById("chi");
	var n = base.cloneNode(true);
	n.style.display = "";
    n.id = "chi" + (++counter);
    n.classList.add("moved");
    n.setAttribute("speed_mult",Math.random()+1);
    var pos = Math.floor(Math.random()*(window.innerWidth+window.innerHeight));
    
    if(pos > window.innerWidth) { 
        n.style.top = (pos - window.innerWidth) +"px";
        n.style.left = window.innerWidth +"px";
    }else{
        n.style.left = pos+"px";
        n.style.top = "-200px";
    }
    
    /*n.style.left = left+"px";
    n.style.top = top+"px";*/
    var glow = n.getElementById("glow");
    glow.style.stroke = "#" + color() + color() + color();
    document.body.appendChild(n);
}
var t = +new Date;
function move() {
    var moved = document.getElementsByClassName("moved");
    var nt = +new Date;
    var diff = nt-t;
    t = nt;
    for(var i = 0; i < moved.length;i++) {
        var mult = Number(moved[i].getAttribute("speed_mult"));
        var newtop = Number(moved[i].style.top.replace("px","")) + (base_speed * mult)*(diff/1000);
        var newleft = Number(moved[i].style.left.replace("px","")) - (base_speed * mult)*(diff/1000);
        if(newtop > window.innerHeight || newleft < -200) {
            moved[i].parentNode.removeChild(moved[i]);
            add();
        }else{
        moved[i].style.left = newleft+"px";
        moved[i].style.top = newtop+"px";  
        }
    }
    if(running) {
        requestAnimationFrame(move);
    }
}

function color() {
    return Math.floor(Math.random() * (255 - 100) + 100).toString(16).toUpperCase();
}

function count() {
    var n = document.getElementById("count");
    var c = Number(n.innerHTML);
    n.innerHTML = (++c).toString();
}

move();
//setInterval(move,0.1);

function pause() {
    running = false;
}

function start() {
    running = true;
    move();
}
