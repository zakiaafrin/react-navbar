import React from 'react';

// const Test = (props) => {
//     console.log(props)
//     return (
//         <h1>I am Test</h1>
//     )
// }
const Test = ({ match }) => {
    return (
        <h1>I am Test {match.params.postId}</h1>
    )
}

export default Test