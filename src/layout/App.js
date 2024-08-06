import React from 'react'
import { Link } from 'react-router-dom';
import '../css/app.css'

function App() {
    return (
        <section id="app_download" className="app_bg1 app_bg2 app_bg3 position-relative">
       
        <div className="container d-flex align-items-center justify-content-between"  id="jeAppbanner">
            <div className="d-flex flex-column align-items-center">
                <h4 className="d-flex app_come">펫토피아로 와요</h4>
                <h6 className="app_come_first">첫 회원가입시 2000P 적립</h6>
            </div>
            <div>
                <Link to="/" className="app_down d-flex">어플 다운로드</Link>
            </div>    
        </div> 
    </section>
    )
}

export default App
