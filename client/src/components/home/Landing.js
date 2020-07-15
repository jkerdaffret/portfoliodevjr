import React, { Component } from 'react'

class Landing extends Component {
    render() {
        return (
            <div className="landing" id="landing">
                <p className="land-text dev">DÉVELOPP<span className="negatif">EUR</span></p>
                <p className="land-text web"><span className="negatif">WEB</span></p>
                <p className="land-text jr">JUNI<span className="negatif">OR</span></p>
                <p className="land-text dot">.</p>
            </div>
        )
    }
}

export default Landing