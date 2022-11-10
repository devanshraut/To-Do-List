// 
module.exports.getdate=getdate;

function getdate() {
    
var today = new Date();
 
var options={
    weekday: "long",
    day:"numeric",
    month: "long",
};
let Day = today.toLocaleDateString("en-US",options);

return Day;
    
}

module.exports.getDay=getDay;

function getDay() {
    
var today = new Date();
 
var options={
    weekday: "long",
  
};
let Day = today.toLocaleDateString("en-US",options);

return Day;
}