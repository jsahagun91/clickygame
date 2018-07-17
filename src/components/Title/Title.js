import React from "react";
import "./Title.css";

const Title = props => {
    let statusText;
    if (props.guess === 0) {
        statusText = <h2> Click an image to begin!</h2>
    }
    else if (props.guess === 1) {
        statusText = <h2> You guessed correctly! </h2>
    }
    else if (props.guess === -1) {
        statusText = <h2> You guessed incorrectly! </h2>
    }

    return (<div> <h1 className="title"> {props.children} </h1>
              <div>
              Score: {props.score} <br/>
              Top Score: {props.topScore}
              </div>
              <div>
              {statusText}    
              </div>           

            </div>);
}

export default Title;