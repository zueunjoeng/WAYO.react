// Formtage.js
import React, { useState, useEffect } from "react";
import formcss from '../css/formcss.module.scss';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { supabase } from '../data/supabaseClient';

function Form() {
  const [formData, setFormData] = useState({
    w_name: '',
    w_ph: '',
    w_address: '',
    start_hour: '10',
    start_minute: '00',
    end_hour: '10',
    end_minute: '00',
    w_animaltype: '',
    w_numberofpets: '',
    w_service: '',
    w_day: ''
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [address, setAddress] = useState(formData.w_address || '');

  const toggleService = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];

    setSelectedServices(updatedServices);
    setFormData((prevFormData) => ({
      ...prevFormData,
      w_service: updatedServices.join(', ')
    }));
  };

  const isSelected = (service) => selectedServices.includes(service);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
      w_day: prevFormData.w_day // 유지하려는 날짜
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { error } = await supabase
        .from('pet_form')
        .insert([formData]);
  
      if (error) throw error;
      alert('감사합니다. "예약 확정 확인 문자"가 전송될 예정입니다!');
    } catch (error) {
      console.error('데이터 제출 중 오류 발생:', error.message);
      alert('데이터 제출에 실패했습니다.');
    }
  };

  useEffect(() => {
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
      onSelect: (dateText) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          w_day: dateText
        }));
      }
    });

    // 날짜를 formData에서 가져와 datepicker에 설정합니다.
    if (formData.w_day) {
      $("#datepicker").datepicker("setDate", formData.w_day);
    }

    // 숫자와 문자 입력 제한 설정
    const isNumberKey = (evt) => {
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      return charCode <= 31 || (charCode >= 48 && charCode <= 57) || charCode === 8;
    };

    const isCharacterKey = (evt) => {
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32;
    };

    // 입력 필드에 이벤트 리스너 추가
    document.getElementById("input6")?.addEventListener("keypress", function (event) {
      if (!isNumberKey(event)) {
        event.preventDefault();
      }
    });

    document.getElementById("input5")?.addEventListener("keypress", function (event) {
      if (!isCharacterKey(event)) {
        event.preventDefault();
      }
    });

    return () => {
      // Clean up event listeners on component unmount
      document.getElementById("input6")?.removeEventListener("keypress", isNumberKey);
      document.getElementById("input5")?.removeEventListener("keypress", isCharacterKey);
    };
  }, [formData.w_day]);

  useEffect(() => {
    const loadDaumPostcodeScript = () => {
      const script = document.createElement('script');
      script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      script.onload = () => {
        window.daumPostcode = window.daum.Postcode;
      };
      document.body.appendChild(script);
    };

    loadDaumPostcodeScript();
  }, []);

  const sample5_execDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        const addr = data.roadAddress || data.jibunAddress;
        setAddress(addr);
        setFormData(prevFormData => ({ ...prevFormData, w_address: addr }));
      }
    }).open();
  };

  return  (
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center m-0 w-100">
    <ul className={`d-flex ${formcss.direction}`}>
      <li className={`d-flex align-items-center ${formcss.form_box} col-md-6`}>
        <label htmlFor="datepicker" className={`col-4 ${formcss.forLabel}`}>선택일자</label>
        <input
          className={` col-8 ${formcss.for_input_sele}`}
          type="text"
          id="datepicker"
          name="w_day"
          placeholder="날짜 선택"
          value={formData.w_day}
          onChange={handleChange}
        />
      </li>
      <li className={`d-flex align-items-center ${formcss.form_box} col-md-6`}>
        <label htmlFor="hourSelectStart" className={formcss.forLabel}>희망시간</label>
        <div className="d-flex">
        <select
          className={formcss.for_input}
          id="hourSelectStart"
          name="start_hour"
          value={formData.start_hour}
          onChange={handleChange}
        >
          {[...Array(10).keys()].map(i => (
            <option key={i + 10} value={i + 10}>{i + 10}</option>
          ))}
        </select>
        <span className={`${formcss.hourSelect_text}`}>:</span>
        <select
          className={formcss.for_input}
          id="miuhourSelectStart"
          name="start_minute"
          value={formData.start_minute}
          onChange={handleChange}
        >
          <option value="00">00</option>
          <option value="30">30</option>
        </select>
        <span className={`${formcss.hourSelect_text}`}>~</span>
        <select
          className={formcss.for_input}
          id="hourSelectEnd"
          name="end_hour"
          value={formData.end_hour}
          onChange={handleChange}
        >
          {[...Array(10).keys()].map(i => (
            <option key={i + 10} value={i + 10}>{i + 10}</option>
          ))}
        </select>
        <span className={`${formcss.hourSelect_text}`}>:</span>
        <select
          className={formcss.for_input}
          id="miuhourSelectEnd"
          name="end_minute"
          value={formData.end_minute}
          onChange={handleChange}
        >
          <option value="00">00</option>
          <option value="30">30</option>
        </select></div>
      </li>
    </ul>

    <ul className={`d-flex ${formcss.direction}`}>
      <li className={`d-flex align-items-center ${formcss.form_box} col-md-6`}>
        <label htmlFor="petSelect" className={formcss.forLabel}>반려동물</label>
        <select
          className={`ms-auto ${formcss.for_input}`}
          id="petSelect"
          name="w_animaltype"
          placeholder="종류"
          value={formData.w_animaltype}
          onChange={handleChange}
        >
          <option value="" disabled hidden>종류</option>
          <option value="d">강아지</option>
          <option value="c">고양이</option>
          <option value="a">모두</option>
        </select>
      </li>
      <li className={`d-flex align-items-center ${formcss.form_box} col-md-6`}>
        <label htmlFor="petCount" className={formcss.forLabel}>반려동물 수</label>
        <select
          className={`ms-auto ${formcss.for_input}`}
          id="petCount"
          name="w_numberofpets"
          value={formData.w_numberofpets}
          onChange={handleChange}
        >
          <option value="">선택</option>
          <option value="1">1마리</option>
          <option value="2">2마리</option>
          <option value="3">3마리</option>
          <option value="4">4마리</option>
          <option value="5+">5마리 이상</option>
        </select>
      </li>
    </ul>

    <ul className={`${formcss.direction}`}>
      <li className={`d-flex align-items-center ${formcss.form_box_etc}`}>
        <label htmlFor="service" className={formcss.forLabel}>필요서비스</label>
        <div className="d-flex align-items-center justify-content-center col-10" name="w_service">
          <input
            type="button"
            value="#산책"
            name="wk"
            className={`col-3 pb-1 ${formcss.selectable} ${isSelected('#산책', selectedServices) ? formcss.selected : ''}`}
            onClick={() => toggleService('#산책', selectedServices, setSelectedServices, setFormData)}
          />
          <input
            type="button"
            value="#목욕"
            name="wb"
            className={`col-3 pb-1 ${formcss.selectable} ${isSelected('#목욕', selectedServices) ? formcss.selected : ''}`}
            onClick={() => toggleService('#목욕', selectedServices, setSelectedServices, setFormData)}
          />
          <input
            type="button"
            value="#건강검진"
            name="wh"
            className={`col-3 pb-1 ${formcss.selectable} ${isSelected('#건강검진', selectedServices) ? formcss.selected : ''}`}
            onClick={() => toggleService('#건강검진', selectedServices, setSelectedServices, setFormData)}
          />
          <input
            type="button"
            value="#돌봄"
            name="wc"
            className={`col-3 pb-1 ${formcss.selectable} ${isSelected('#돌봄', selectedServices) ? formcss.selected : ''}`}
            onClick={() => toggleService('#돌봄', selectedServices, setSelectedServices, setFormData)}
          />
        </div>
        <div className={`d-flex align-items-center justify-content-center ${formcss.selectcount}`}>
          <select className={formcss.for_input} id="serviceCount" name="w_service" onChange={handleChange}>
            <option value="">필요서비스를 선택하세요</option>
            <option value="#산책">산책</option>
            <option value="#목욕">목욕</option>
            <option value="#건강검진">건강검진</option>
            <option value="#돌봄">돌봄</option>
            <option value="#상담 후 결정">상담 후 결정</option>
          </select>
        </div>
      </li>   
      
      <li className={`d-flex align-items-center ${formcss.addressinput}`}>
          <label htmlFor="sample5_address" className={`${formcss.forLabel} me-3`}>주소</label>
          <input
            type="text"
            id="sample5_address"
            className={`me-3 ${formcss.for_input}`}
            placeholder="상세주소도 함께 입력해주세요"
            value={address} // 주소 상태값
            onChange={(e) => {
              setAddress(e.target.value); // 주소 입력 변경
              setFormData(prevFormData => ({ ...prevFormData, w_address: e.target.value })); // formData의 주소 업데이트
            }}
          />
          <button
            type="button"
            onClick={sample5_execDaumPostcode}
            style={{ border: 'none', backgroundColor: 'transparent' }}
          >
            <i className={`${formcss.bi} bi-search`}></i>
          </button>
        </li>
    </ul>

 

    <ul className={`d-flex ${formcss.direction}`}>
      <li className={`d-flex align-items-center ${formcss.form_box} col-md-6`}>
        <label htmlFor="input5" className={`col-4 ${formcss.forLabel}`}>보호자</label>
        <input
          className={`col-8 ${formcss.for_input}`}
          type="text"
          id="input5"
          name="w_name"
          placeholder="이름 작성"
          value={formData.w_name}
          onChange={handleChange}
        />
      </li>
      <li className={`d-flex align-items-center ${formcss.form_box} col-md-6`}>
        <label htmlFor="input6" className={`col-4 ${formcss.forLabel}`}>연락처</label>
        <input
          className={`col-8 ${formcss.for_input}`}
          type="text"
          id="input6"
          name="w_ph"
          placeholder="연락처 작성"
          value={formData.w_ph}
          onChange={handleChange}
        />
      </li>
    </ul>

    <button type="submit" className={`mt-3 ${formcss.subbtn}`}>구독하기</button>
  </form>
  );
}

export default Form;