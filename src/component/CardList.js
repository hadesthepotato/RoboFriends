import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    //to test that our ErrorBoundry works
    // if(true){
    //     throw new Error("noooo");
    // }
    return (
        <div>
            {
                robots.map((robot,i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;