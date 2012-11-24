var counter = 0;
var base_speed = 20;
var base_div = 20000;
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
        n.style.top = "0px";
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
    for(var i = 0; i < moved.length;i++) {
        var mult = Number(moved[i].getAttribute("speed_mult"));
        var nt = +new Date;
        var diff = nt-t;
        var newtop = Number(moved[i].style.top.replace("px","")) + (base_speed * mult)*(diff/base_div);
        var newleft = Number(moved[i].style.left.replace("px","")) - (base_speed * mult)*(diff/base_div);
        if(newtop > window.innerHeight || newleft < 0) {
            moved[i].parentNode.removeChild(moved[i]);
            moved[i] = 0;
            add();
        }else{
        moved[i].style.left = newleft+"px";
        moved[i].style.top = newtop+"px";  
        }
    }
    mozRequestAnimationFrame(move);
}

function color() {
    return Math.floor(Math.random() * (255- 100) + 100).toString(16).toUpperCase();
}

function count() {
    var n = document.getElementById("count");
    var c = Number(n.innerHTML);
    n.innerHTML = (++c).toString();
}

move();
//setInterval(move,0.1);