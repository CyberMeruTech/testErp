export function Poem(){
    return(
        <>
            <p>Twinkle, twinkle, little star,</p>
            <p>How I wonder what you are!</p>
        </>
    )
}

export function Song(){
    return(
        <>
            <div style={{color:"black" , backgroundColor:"#D1B464" , borderWidth: "1px" , borderColor:"black" , borderStyle:"solid", textAlign:"center", margin:'10px' ,padding:'10px'}}>
                <p>Yeah, you could be the greatest, you can be the best</p>
                <p>You can be the King Kong banging on your chest</p>
            </div>
        </>
    )
}
export default function Kavita(){
    let mystyle = {color:"white" , backgroundColor:"skyblue" , borderWidth: "1px" , borderColor:"black" , borderStyle:"solid", textAlign:"center", margin:'10px' ,padding:'10px'}
    return(
        <>
            <div style={mystyle}>
                <p>Yes re ye re Pavasa</p>
                <p>Tula deto paisa</p>
            </div>
        </>
    )
}