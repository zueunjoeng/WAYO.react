//Address.js
import React, { useState, useEffect } from 'react';
import formcss from '../css/formcss.module.scss';

const Address = () => {
    const [address, setAddress] = useState(''); // 주소 상태

    const loadDaumPostcodeScript = () => {
        const script = document.createElement('script');
        script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        script.onload = () => {
            window.daumPostcode = window.daum.Postcode; // 다움 주소 API 초기화
        };
        document.body.appendChild(script);
    };

    const sample5_execDaumPostcode = () => {
        new window.daum.Postcode({
            oncomplete: function(data) {
                const addr = data.roadAddress || data.jibunAddress; // 도로명 주소 또는 지번 주소
                setAddress(addr); // 주소를 상태로 업데이트
            }
        }).open();
    };

    useEffect(() => {
        loadDaumPostcodeScript(); // 컴포넌트 마운트 시 주소 스크립트 로드
    }, []);


    return (
        <div className="d-flex">
            <div className={`d-flex align-items-center ${formcss.form_box} ${formcss.addressinput}`}>
                <label htmlFor="sample5_address" className={`${formcss.form_label} me-3`}>주소</label>
                <input
                    type="text"
                    id="sample5_address"
                    className={` me-3 ${formcss.for_input}`}
                    placeholder="상세주소도 함께 입력해주세요"
                    value={address} // 주소 상태값
                    onChange={(e) => setAddress(e.target.value)} // 주소 입력 변경
                />
                <button
                    type="button"
                    onClick={sample5_execDaumPostcode}
                    style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                    <i className={`${formcss.bi} bi-search`}></i>
                </button>
            </div>
        </div>
    );
};

export default Address;
