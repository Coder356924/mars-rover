canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");

nasa_mars_image_array=["nasa_image_1.jpg","nasa_image_2.jpg","nasa_image_3.jpg","nasa_image_4.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image=nasa_mars_image_array[random_number];
console.log("background_image= "+background_image);

rover_image="rover.png";

function add(){
    background_imgT=new Image();
    background_imgT.onload=uploadB;
    background_imgT.src=background_image;

    rover_imgT=new Image();
    rover_imgT.onload=uploadR;
    rover_imgT.src=rover_image;
}

function uploadB(){
    ctx.drawImage(background_imgT, 0, 0, canvas.width, canvas.height);

}

function uploadR(){
    ctx.drawImage(rover_imgT, rover_x, rover_y, rover_width, rover_height);

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");

    }
    if(keyPressed=='40'){
        down();
        console.log("down");
        
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
        
    }
    if(keyPressed=='39'){
        right();
        console.log("right");

        
    }

}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadB();
        uploadR();

    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadB();
        uploadR();
        
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadB();
        uploadR();
        
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadB();
        uploadR();
        
    }
}