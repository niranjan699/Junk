const http =require('http');
const url=require('url');
const stringDcoder=require('string_decoder').StringDecoder;


// start http server and start listening
var server=http.createServer((req,res)=>{

//get url and parse 

let parsedurl=url.parse(req.url,true);




//get the path


let path=parsedurl.pathname;
let trimmedpath=path.replace(/^\/+|\/+$/g,'');


//send response



//get method
let method=req.method.toLowerCase();


//get query string 
var queryString=parsedurl.query;


//get headers as objects
let headers=req.headers;

//log it
var decoder=new stringDcoder('utf-8');  
var buffer='';
req.on('data',(data)=>{
buffer+=decoder.write(data);


});
req.on('end',()=>{
buffer+=decoder.end();

res.end("YOu n"+buffer);
});

console.log('request from  headers  ', buffer);

 


});

server.listen(3000,()=>{

    console.log("I\'m listening");
});

