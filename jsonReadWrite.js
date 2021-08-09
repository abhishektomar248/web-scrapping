// let fs=require("fs");
// //object,array
// //object->contain string as key
// //{
//    // "name":"abhishek"
// //}
// let input=["hello","hi","how"];
// //write
// let jsonWriteAble=JSON.stringify(input);
// fs.writeFileSync("abc.json",jsonWriteAble);
//for read
// let fs =require("fs");
// let content=fs.readFileSync("abc.json");
// let jsonData=JSON.parse(content);

// console.log(jsonData)
//append(add data)
let fs =require("fs");
 let content=fs.readFileSync("abc.json");
 let jsonData=JSON.parse(content);
 jsonData.push("holo");
  let jsonWriteAble=JSON.stringify(jsonData);
 fs.writeFileSync("abc.json",jsonWriteAble);

