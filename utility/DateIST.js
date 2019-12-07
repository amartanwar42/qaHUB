module.exports = ()=>{
    const date= new Date();
    return  date.toLocaleString('en-US', {timeZone: "Asia/Kolkata"})
}