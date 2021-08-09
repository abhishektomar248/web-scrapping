let request =require("request");
let cheerio=require("cheerio");
//data extract->cheerio
console.log("before");
request('http://www.npmjs.com/package/cheerio',cb);
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
    //css selector ->elem represntation
    let elemRep= searchTool("#readme>h1");
    //text
    let moduleName=elemRep.text().trim();
    console.log("moduleName",moduleName);

}
console.log("after");