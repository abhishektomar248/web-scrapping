let request =require("request");
let cheerio=require("cheerio");
//let fs=require("fs");
const { fstat } = require("fs");
//data extract->cheerio
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
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
    let bowlers =searchTool(".table.bowler tbody tr");
    
    for(let i=0;i<bowlers.length;i++){
        //row ->col
        let cols=searchTool(bowlers[i]).find("td");//give subpart info from page
        let aElem =searchTool(cols[0]).find("a");//finding attributes
        let link=aElem.attr("href");//get link to get that page
        //link
        let fullLink=`https://www.espncricinfo.com${link}`;
       // console.log(fullLink);
       request(fullLink, newcb);
        
       
    }

}
function newcb(error,response,html){
    if(error){
        console.log(error);//print the eeror if one occured
    
     }else if(response.statusCode==404){
         console.log("page not found");
    }else{
        //console.log(html);//print the html for request made
       
       // console.log("html:", );
       console.log("'''''''''''''''''");
       getBirthday(html);
    }

}
function getBirthday(html){
    let searchTool=cheerio.load(html);
    let headingsArr=searchTool(".player-card-description");
    let age=searchTool(headingsArr[2]).text();
    let name=searchTool(headingsArr[0]).text();
    console.log(name," ",age);
}
console.log("after");