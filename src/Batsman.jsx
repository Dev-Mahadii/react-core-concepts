import { useState } from "react"

export default function Batsman (){

    const [score, setScore] = useState(0);
    const [single, setSingle] = useState(0);
    const [four, setFour] = useState(0);
    const [six, setSix] = useState(0);

    const handleSingles=()=>{
        
        const updatedRuns = score + 1;
        setScore(updatedRuns);

        const singleCount = single + 1;
        setSingle(singleCount);
    }
    const handleFour=()=>{
        const updatedRuns = score + 4;
        setScore(updatedRuns)

        const fourCount = four + 1;
        setFour(fourCount)
    }
    const handleSix=()=>{
        const updatedRuns = score + 6;
        setScore(updatedRuns)

        const sixCount = six + 1;
        setSix(sixCount)
    }

    return(
        <div>

            <p><small>Single: {single}</small></p>
            <p><small>Four: {four}</small></p>
            <p><small>Six: {six}</small></p>
            <h3>Player: Bangladeshi</h3>
            {
                score>50 && <p>Congratulation! 50 Scored</p>
            }
            <h1>Score: {score}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}