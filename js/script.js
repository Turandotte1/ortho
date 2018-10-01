var tr1 = document.getElementsByClassName("tr1");
var tr2 = document.getElementsByClassName("tr2");
var tr3 = document.getElementsByClassName("tr3");
var tr4 = document.getElementsByClassName("tr4");
var tr5 = document.getElementsByClassName("tr5");
var tr6 = document.getElementsByClassName("tr6");
var tr7 = document.getElementsByClassName("tr7");
var tr8 = document.getElementsByClassName("tr8");
var tr9 = document.getElementsByClassName("tr9");
var tr10 = document.getElementsByClassName("tr10");
var tr11 = document.getElementsByClassName("tr11");
var tr12 = document.getElementsByClassName("tr12");
var tr13 = document.getElementsByClassName("tr13");
var tr14 = document.getElementsByClassName("tr14");
var tr15 = document.getElementsByClassName("tr15");
var tr16 = document.getElementsByClassName("tr16");
var tr17 = document.getElementsByClassName("tr17");
var grass = document.getElementsByClassName("grass");
var dyno1 = document.getElementsByClassName("dyno1");
var gills = document.getElementsByClassName("gillsMove");
var dyno3 = document.getElementsByClassName("dyno3");
var dyno4 = document.getElementsByClassName("dyno4");
var pl1 = document.getElementsByClassName("pl1");
var pl2 = document.getElementsByClassName("pl2");
var pl3 = document.getElementsByClassName("pl3");
var pl4 = document.getElementsByClassName("pl4");
var pl5 = document.getElementsByClassName("pl5");
var dyno5 = document.getElementsByClassName("dyno5");
var horn1 = document.getElementsByClassName("horn1");
var horn2 = document.getElementsByClassName("horn2");
var horn3 = document.getElementsByClassName("horn3");

var tltreeSwing = new TimelineMax();
var tltreeSwing2 = new TimelineMax();
var dynoBreath = new TimelineMax();
var tlDynoMove = new TimelineMax();
var dynoWatchTexte = new TimelineMax();
var plantsBilan = new TimelineMax();


function movingPlants(){
  tltreeSwing.staggerFromTo([tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8,tr9,tr10,tr11,tr12,tr13,tr14,tr15,tr16,tr17], 1.5, {
    transformOrigin: "50% 100%",
    skewX:1
  }, {
    skewX:2.5,
    repeat:-1,
    yoyo:true,
    ease:"linear",
  }, 30)
}

function animationBilan(){
  plantsBilan.staggerFromTo([pl1, pl2, pl3, pl4, pl5], 1.5, {
    transformOrigin: "50% 100%",
    skewX:1
  }, {
    skewX:2.5,
    repeat:-1,
    yoyo:true,
    ease:"linear",
  }, 3)
}

function moveDyno1(){
  var tldyno1 = new TimelineMax();
  tldyno1.to(dyno1, .5, {opacity:1}, 10)
  tldyno1.to(gills, .5, {skewY:"5deg", repeat:15, yoyo:true})
  tldyno1.to(dyno1, 1, {opacity:0})
}

function moveDyno3(){
  var tldyno3 = new TimelineMax();
  tldyno3.to(dyno3, .5, {opacity:1}, 180)
  tldyno3.to(dyno3, .5, {scale:1.010, repeat:15, yoyo:true})
  tldyno3.to(dyno3, .5, {opacity:0})
}

function moveDyno4(){
  var tldyno4 = new TimelineMax();
  tldyno4.to(dyno4, .5, {opacity:1}, 360)
  tldyno4.to(dyno4, .5, {scale:1.010, repeat:15, yoyo:true})
  tldyno4.to(dyno4, .5, {opacity:0})
}

function moveDyno5(){
  var tldyno5 = new TimelineMax();
  tldyno5.to(dyno5, .5, {opacity:1}, 460)
  tldyno5.to(horn1, .5, {skewY:"8deg", repeat:25, yoyo:true})
  tldyno5.to(dyno5, .5, {opacity:0})
}

setTimeout(function() {
  moveDyno1();
  animationBilan();
  moveDyno3();
  moveDyno4();
  moveDyno5();
}, 0);

var tlgrass = new TimelineMax();
tlgrass.staggerFromTo(grass, 2, {
  transformOrigin:"0% 100%",
  skewX:"10deg"
}, {
  skewX:"-10deg",
  repeat: -1,
  yoyo: true
}, 0.3);

window.onload = movingPlants;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
