import React, { useState } from 'react'
import { connect } from 'react-redux'

const Ball = (props) => {
    console.log(props, "LLL");

    const [qty, setqty] = useState(1);
    return (
        <>

            Ball :   <h1>
                {props.balls}
            </h1>

            <input type='number' onChange={(e) => setqty(e.target.value)} />

            <button onClick={() => props.buyBall(qty)}>BALL --</button>
            <button onClick={props.sellBall}>BALL ++</button>

        </>
    )
}



const mapStateToProps = (state) => {
    return {
        balls: state.ball.balls
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        buyBall: (qty) => dispatch({ type: "BUY_BALL", payload: qty }),
        sellBall: () => dispatch({ type: "SELL_BALL" })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Ball)