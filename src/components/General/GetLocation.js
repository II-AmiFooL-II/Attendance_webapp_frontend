
export const GetLocation = (props)=>{
    if(!navigator.geolocation){
        props["seStatus"](0);
    }
    else{
        props["setStatus"](1);
        navigator.geolocation.getCurrentPosition((position)=>{
            props["setLocation"](position.coords);
            props["setStatus"](2);
        },(err)=>{
            props["setStatus"](-1);
        })
    }
}