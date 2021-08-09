let request =require("request");
let cheerio=require("cheerio");

let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
function processSinglematch(url){

request(url,cb);
}
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
    let bothInningArr=searchTool(".Collapsible");
    for (let i = 0; i < bothInningArr.length; i++) {
        // scoreCard = searchTool(bothInningArr[i]).html();
        let teamNameElem = searchTool(bothInningArr[i]).find("h5");
        let teamName = teamNameElem.text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0];
        // console.log(teamName);
        teamName = teamName.trim();
        console.log(teamName);
        let batsManTableBodyAllRows = searchTool(bothInningArr[i]).find(".table.batsman tbody tr");
        console.log(batsManTableBodyAllRows.length)
        // type cohersion loops -> 
        for (let j = 0; j < batsManTableBodyAllRows.length; j++) {
            let numberofTds = searchTool(batsManTableBodyAllRows[j]).find("td");
            // console.log(numberofTds.length);
            if (numberofTds.length == 8) {
                // console.log("You are valid")
                let playerName = searchTool(numberofTds[0]).text();
                console.log(playerName);
            }
        }
        console.log("``````````````````````````````````````")
        // fs.writeFileSync(`innning${i+1}.html`,scoreCard);

    }
    // players name
}
module.exports = {
    processSinglematch

}