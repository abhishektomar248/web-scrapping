let request =require("request");
let cheerio=require("cheerio");
//let fs=require("fs");
//const { fstat } = require("fs");
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
    // let htmlData="";
    // for(let i=0;i<bowlersTables.length;i++){
    //     //html function
    //     htmlData+=searchTool(bowlersTables[i]).html();

    // }
    // fs.writeFileSync("table.html",htmlData);

    //loop
    //name
    let bowler="";
    let hwt=0;
    for(let i=0;i<bowlers.length;i++){
        let cols=searchTool(bowlers[i]).find("td");
        let name =searchTool(cols[0]).text();
        let wickets =searchTool(cols[4]).text();
        console.log(name+" "+wickets);
        if(wickets>=hwt){
            bowler=name;
            hwt=wickets;
        }
    }
    console.log("''''''''''");
    console.log(bowler+" "+hwt);
    //wicket

}
console.log("after");