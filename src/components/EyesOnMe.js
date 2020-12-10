// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component {

    
    DoOnFocus = () => {
        console.log('Good!')
    }

    DoOnBlur = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render(){
        return(
            <button onFocus={this.DoOnFocus} onBlur={this.DoOnBlur}>
                Eyes on me, please!
            </button>
        )
    }

}

export default EyesOnMe