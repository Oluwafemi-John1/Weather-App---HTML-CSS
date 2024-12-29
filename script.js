navigator.geolocation.getCurrentPosition((info)=>{
    let data = info.coords
    console.log(data);
})