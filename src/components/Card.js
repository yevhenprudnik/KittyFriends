import React from "react";

const Card = ({name, username, email, id}) => {
    return(
        <div className="tc bg-light-green dib br4 pa3 ma3 grow bw2 shadow-2">
            <img src={`https://robohash.org/set_set4/${id}u?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p> <h3>{username}</h3></p>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;