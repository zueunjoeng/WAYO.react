import React, { useState } from "react";
import formcss from '../css/formcss.module.scss';
import Calendar from "../component/Calendar";
import Formtage from "../component/Formtag";
import "jquery-ui-dist/jquery-ui";
import Popup from '../component/Popup'
import { supabase } from '../data/supabaseClient';

function Form() {
    const [formData, setFormData] = useState({});

    // Formtage에서 폼 데이터를 전달받아 상태를 업데이트하는 함수
    const handleFormData = (data) => {
        setFormData(data);
    };

    // 데이터를 Supabase로 전송하는 함수
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from('petopiaform')
                .insert([formData]);

            if (error) {
                throw error;
            }
            alert('데이터가 성공적으로 저장되었습니다!');
        } catch (error) {
            console.error('데이터 저장 중 오류 발생:', error.message);
        }
    };

    return (
        <section className={`${formcss.form_tag} d-flex justify-content-center`}>
            <div className={`${formcss.container} position-relative`}>
                <div>
                    <h2 className={`pt-5 ${formcss.form_text}`}>너도 아프냐 멍? 나도 아프다 냥!</h2>
                    <div className={`mt-1 mb-4 ${formcss.form_text}`}>#집중케어 #펫케어 #펫팸족</div>
                </div>

                <div id="formtag" className={`d-flex justify-content-between align-items-center mb-0 ${formcss.serviceform}`}>
                    <div className={`${formcss.allbox} d-flex justify-content-between  ${formcss.container}`}>
                        {/* 왼쪽 달력 */}
                        <Calendar />

                        {/* 폼태그 */}
                        <div className={`d-flex flex-column align-items-center justify-content-center ${formcss.form_momdiv}`}>
                            <Formtage onFormDataChange={handleFormData} />
                            {/* <button type="submit" className={`mt-3 ${formcss.subbtn}`} onClick={handleSubmit}>
                                구독하기
                            </button> */}
                        </div>
                    </div>
                </div>
               <Popup />
            </div>
        </section>
    )
}

export default Form;
