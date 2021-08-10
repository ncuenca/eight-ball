import React, { useState } from "react";
import _ from 'lodash';
import './Eightball.css';

function Eightball(props) {
    // const [pushed, setPushed] = useState(false);

    const [answer, setAnswer] = useState(
        {msg:"Think of a question.", color:"black"}
    );
    const [colorsToScores, setScore] = useState({
        'red':0,
        'green':0,
        'goldenrod':0
    });


    function handleClick() {
        // setPushed(true);
        const newAnswer = _.sample(props.answers);
        setAnswer(newAnswer);
        const newColorsToScores = {...colorsToScores}
        newColorsToScores[newAnswer.color]++;
        setScore(newColorsToScores);
    }

    function handleReset() {
        // setPushed(true);
        setAnswer({msg:"Think of a question.", color:"black"});
        setScore({
            'red':0,
            'green':0,
            'goldenrod':0
        });
    }

    return (
        <div>
            <button 
                className={`eight-ball`} 
                // className={`eight-ball ${pushed ? `${answer.color}` : "black"}`} 
                onClick={handleClick}
                style={{"backgroundColor":`${answer.color}`}}>
                {/* <b>{pushed ? `${answer.msg}` : "Think of a question."}</b> */}
                <b>{answer.msg}</b>
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <p>Green: {colorsToScores['green']} Red: {colorsToScores['red']} Goldenrod: {colorsToScores['goldenrod']}</p>
        </div>
    );
}

Eightball.defaultProps = {
    answers:   [
                { msg: "It is certain.", color: "green" },
                { msg: "It is decidedly so.", color: "green" },
                { msg: "Without a doubt.", color: "green" },
                { msg: "Yes - definitely.", color: "green" },
                { msg: "You may rely on it.", color: "green" },
                { msg: "As I see it, yes.", color: "green" },
                { msg: "Most likely.", color: "green" },
                { msg: "Outlook good.", color: "green" },
                { msg: "Yes.", color: "green" },
                { msg: "Signs point to yes.", color: "goldenrod" },
                { msg: "Reply hazy, try again.", color: "goldenrod" },
                { msg: "Ask again later.", color: "goldenrod" },
                { msg: "Better not tell you now.", color: "goldenrod" },
                { msg: "Cannot predict now.", color: "goldenrod" },
                { msg: "Concentrate and ask again.", color: "goldenrod" },
                { msg: "Don't count on it.", color: "red" },
                { msg: "My reply is no.", color: "red" },
                { msg: "My sources say no.", color: "red" },
                { msg: "Outlook not so good.", color: "red" },
                { msg: "Very doubtful.", color: "red" },
                ]
}

export default Eightball;