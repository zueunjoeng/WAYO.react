//Form.js
import React from "react";
import formcss from '../css/formcss.module.scss';
import Calendar from "../component/Calendar";
import Formtage from "../component/Formtag";
import "jquery-ui-dist/jquery-ui";
import Popup from '../component/Popup'
function Form() {
    return (

    <section className={`${formcss.form_tag} d-flex justify-content-center`}>
        <div className={`${formcss.container} position-relative`}>
            <div>
                <h2 className={`pt-5 ${formcss.form_text}`}>너도 아프냐 멍? 나도 아프다 냥!</h2>
                <div className={`mt-1 mb-4 ${formcss.form_text}`}>#집중케어 #펫케어 #펫팸족</div>
            </div>

            <div id="formtag" className={`d-flex justify-content-between align-items-center mb-0 ${formcss.serviceform}`}>
                <div className={`${formcss.allbox} d-flex justify-content-between  ${formcss.container}`}>
                    {/* <!-- 왼쪽 달력 --> */}
                    <Calendar />

                    {/* <!-- 폼태그 --> */}
                    <div className={`d-flex flex-column align-items-center justify-content-center ${formcss.form_momdiv}`}>
                    
                        <Formtage />

                        <button type="submit" className={`mt-3 ${formcss.subbtn}`}>구독하기</button>
                    </div>
                        
                </div> 
                
            </div>
           <Popup />
        </div>
    </section>

    )
}

export default Form
