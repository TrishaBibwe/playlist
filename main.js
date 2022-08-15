song="";
song1="";
song2="";
song3="";
song4="";
song5="";

function preload(){
 song1=loadSound("dynamite.mp3");
 song2=loadSound("butter.mp3");
 song3=loadSound("permission.mp3");
 song4=loadSound("yettocome.mp3");
 song5=loadSound("lifegoeson.mp3");
}
function draw(){

}

function s1(){
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song1.play();
}

function s2(){
    song1.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song2.play();
}

function s3(){
    song2.stop();
    song1.stop();
    song4.stop();
    song5.stop();
    song3.play();
}

function s4(){
    song2.stop();
    song3.stop();
    song1.stop();
    song5.stop();
    song4.play();
}

function s5(){
    song2.stop();
    song3.stop();
    song4.stop();
    song1.stop();
    song5.play();
}

function stopp(){
    song2.stop();
    song3.stop();
    song4.stop();
    song1.stop();
    song5.stop();
}