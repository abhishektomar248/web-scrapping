let request =require("request");
let cheerio=require("cheerio");
scoreCardObj=require("./scoreCard")

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(url,cb);
function cb(error,response,html){

if(error){
    console.log(error);//print the eeror if one occured

 }else if(response.statusCode==404){
     console.log("page not found");
}else{
   // console.log(html);//print the html for request made
   
   
   dataExtracter(html);
}
}
function dataExtracter(html){
    //search tool
    let searchTool= cheerio.load(html);
    let anchorrep=searchTool('a[data-hover="View All Results"]');
    let link=anchorrep.attr("href");
    //console.log("link",link);
    let fullAllmatchPageLink=`https://www.espncricinfo.com${link}`;
    console.log(fullAllmatchPageLink);
    request(fullAllmatchPageLink, allMatchesPagecb);
}
function allMatchesPagecb(error,response,html){
    if(error){
        console.log(error);//print the eeror if one occured
    
     }else if(response.statusCode==404){
         console.log("page not found");
    }else{
       // console.log(html);//print the html for request made
       
       
       getAllScorecardLink(html);
    }
    }
    function getAllScorecardLink(html){
       console.log("'''''''''''''");
       let searchTool=cheerio.load(html);
       let scorecardsArr=searchTool("a[data-hover='Scorecard']");
       for(let i=0;i<scorecardsArr.length;i++){
          let link=searchTool(scorecardsArr[i]).attr("href");
          let fullAllmatchPageLink=`https://www.espncricinfo.com${link}`;
          console.log(fullAllmatchPageLink); 
          scoreCardObj.processSinglematch(fullAllmatchPageLink)
       }
       console.log("'''''''''''''"); 

    }


