//Address.js
import React, { useState, useEffect } from 'react';
import formcss from '../css/formcss.module.scss';
import { supabase } from '../data/supabaseClient';

const Address = () => {
    const [formData, setFormData] = useState({
        w_name: '',
        w_ph: '',
        w_address: '',
        w_time: '',
        w_animaltype: 'd',  // 초기값 설정
        w_numberofpets: 1,
        w_service: 'wj',
        w_day: ''
      });
    
      // 주소 상태 관리
      const [address, setAddress] = useState('');
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const { data, error } = await supabase
            .from('petopiaform')
            .insert([{ ...formData, w_address: address }]);
    
          if (error) throw error;
          alert('Data inserted successfully!');
        } catch (error) {
          console.error('Error inserting data:', error.message);
        }
    };
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
        <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <div className={`d-flex align-items-center ${formcss.form_box} ${formcss.addressinput}`}>
            <label htmlFor="sample5_address" className={`${formcss.form_label} me-3`}>주소</label>
            <input
              type="text"
              id="sample5_address"
              className={` me-3 ${formcss.for_input}`}
              placeholder="상세주소도 함께 입력해주세요"
              value={address} // 주소 상태값
              name='w_address'
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
        </form>
    );
};

export default Address;
