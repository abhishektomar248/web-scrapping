let request =require("request");
let cheerio=require("cheerio");
//data extract->cheerio
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
console.log("before");
request(url,cb);
function cb(error,response,html){
//console.error('error:',error);//print the error if one occured
//console.log('body:',html);//print the html for google homepage
if(error){
    console.log(error);//print the eeror if one occured

 }else if(response.statusCode==404){
     console.log("page not found");
}else{
    //console.log(html);//print the html for request made
   
   // console.log("html:", );
   dataExtracter(html);
}
}
function dataExtracter(html){
    //search tool
    let searchTool= cheerio.load(html);
    let elemRepArr=searchTool(".match-comment-wrapper .match-comment-long-text");
    //console.log(elemRepArr.length);
    //cram this
    let lbc =searchTool(elemRepArr[0]).text();
    console.log("lbc",lbc)
    
}
console.log("after");