const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder, ball, ground;
var stand1, stand2;
var ball;
var slingshot;
var polygon_img;

function preload(){

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);
    ground = new Polygon();
    stand1 = new Platfomr(380, 300, 270,10);
    stand2 = new Platform();

    //level one
    block1

}