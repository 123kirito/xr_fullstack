//console.log('AI 来了，帅！')
//node 引入模 块的关键字
//图像识别
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;
//内置模块 fs模块 fileSystem
const  fs=require('fs');
 //1.读入文件 I/O操作 文件从硬盘中读入内存中
const APP_ID="23077969"
const API_KEY="8cfzO8otIk7NeX8q4Qvl5rpr"
const SECRET_KEY="W8K0EYCSFdUbetUxwWSzwEVcGkZLBZYk"
const client = new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
const image=fs.readFileSync("野马.jpg").toString("base64");
client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })
    /*const AipOcrClient=require('baidu-aip-sdk').ocr;
//内置模块 fileSystem
const fs=require('fs');
const image=fs.readFileSync("car.jpg").toString("base64");
//1. 读入文件 I/O 从硬 盘读入内存中
const APP_ID="23078073";
const API_KEY="fhSdvTsMazduFfw4DMMRj5zb";
const SECRET_KEY="4Iatlqv7ydEawwovoB2jv9xPmyWSp7Am";

const client=new AipOcrClient(APP_ID,API_KEY,SECRET_KEY);
const options={};
options["multi_detect"]="true";
client
    .licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })
    */