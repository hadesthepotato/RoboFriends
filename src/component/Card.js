import React from "react";

//default way
//const Card = (props)=> {

//deconstructing method 1
const Card = ({name, email, id})=> {

    //deconstructing method 2
    //const {name,email,id} = props;

    return(
        <div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;