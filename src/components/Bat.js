import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';


function Bat(props) {

    const bats = useSelector(state => state.bat.bats);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Bats : {bats}</h1>
            <button onClick={() => dispatch({ type: 'BUY_BAT' })}>Buy Bats</button>
        </>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         bats: state.bat.bats
//     }
// }



// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyBat: () => dispatch({ type: 'BUY_BAT' })
//     }
// }

export default Bat;