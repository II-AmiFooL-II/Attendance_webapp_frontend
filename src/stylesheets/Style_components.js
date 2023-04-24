import styled from 'styled-components';


export const bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

export const Container = styled.div`
@media (min-width: 56.25em){
    display:flex;
}
border-radius: 10px;
box-shadow: 0 14px 28px rgba(0, 0, 0, 0.10), 0 10px 10px rgba(0, 0, 0, 0.05);
margin-left:6vw;
margin-right:6vw;
margin-top:5vw;
margin-bottom:4vw;
overflow: hidden;
width: 85%;
height:100%;
max-width: 100%;
min-height: 64.5vh;
`;

const getImg = (props) =>{
    return require(props.bgimg);
}

export const Card =styled.div`
flex:${(props)=>props.flexlen};
min-height:"100%"
${(props) => 
        props.bgimg === "1"?
            `background-image: url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp");`
            :null
            
}
background-color:rgba(255,255,255,0.9);

`;
//${require("../staticFiles/loginbg.png")
export const HomeContainer = styled.div`
@media (min-width: 56.25em){
    display:flex;
}
margin-left:6vw;
margin-right:6vw;
margin-top:3vw;
margin-bottom:6vw;
overflow: hidden;
width: 85%;
height:100%;
max-width: 100%;
min-height: 64.5vh;
`;

export const HomeCards = styled.div`
width: 100%;
height:30%;

`
export const HomeImg = styled.div`

margin-left:6vw;
margin-right:6vw;
margin-top:3vw;
margin-bottom:6vw;
overflow: hidden;
width: 85%;
height:100%;
max-width: 100%;
min-height: 64.5vh;
`;






