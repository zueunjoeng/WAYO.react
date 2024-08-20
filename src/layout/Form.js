//Form.js
import React, { useState } from "react";
import formcss from '../css/formcss.module.scss';
import Calendar from "../component/Calendar";
import Formtage from "../component/Formtag";
import "jquery-ui-dist/jquery-ui";
import Popup from '../component/Popup'
import { supabase } from '../data/supabaseClient';

function Form() {
    const [formData, setFormData] = useState({});
    const [selectedDate, setSelectedDate] = useState('');

    const handleFormData = (data) => {
        setFormData(data);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase
                .from('pet_form')
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
        <section onSubmit={handleSubmit} className={`${formcss.form_tag} d-flex justify-content-center`}>
            <div className={`${formcss.container} position-relative`}>
                <div>
                    <h2 className={`pt-5 ${formcss.form_text}`}>너도 아프냐 멍? 나도 아프다 냥!</h2>
                    <div className={`mt-1 mb-4 ${formcss.form_text}`}>#집중케어 #펫케어 #펫팸족</div>
                </div>

                <div id="formtag" className={`d-flex justify-content-between align-items-center mb-0 ${formcss.serviceform}`}>
                    <div className={`${formcss.allbox} d-flex justify-content-between align-items-center ${formcss.container}`}>
                        {/* 왼쪽 달력 */}
                         <Calendar onDateSelect={handleDateSelect} />

                        {/* 폼태그 */}
                        <div className={`d-flex flex-column align-items-center justify-content-center ${formcss.form_momdiv}`}>
                        <Formtage selectedDate={selectedDate} onFormDataChange={handleFormData} />
                       
                        </div>
                    </div>
                </div>
               <Popup />
            </div>
        </section>
    )
}

export default Form;
