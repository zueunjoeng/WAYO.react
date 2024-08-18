// Formtage.js
import React, { useState, useEffect } from "react";
import formcss from '../css/formcss.module.scss';
import Address from "../component/Address";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { supabase } from '../data/supabaseClient';

function Form({ selectedDate }) {
  const [formData, setFormData] = useState({
    w_name: '',
    w_ph: '',
    w_address: '',
    start_hour: '10', // 초기값 설정
    start_minute: '00', // 초기값 설정
    end_hour: '10', // 초기값 설정
    end_minute: '00', // 초기값 설정
    w_animaltype: 'd', // 초기값 설정
    w_numberofpets: '1', // 초기값 설정
    w_service: '', // 초기값을 빈 문자열로 수정
    w_day: '' // 날짜 초기값 설정
  });

  const [selectedServices, setSelectedServices] = useState([]);

  // 서비스 선택 토글 함수
  const toggleService = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];

    setSelectedServices(updatedServices);

    // 선택된 서비스를 쉼표로 구분하여 formData에 반영
    setFormData((prevFormData) => ({
      ...prevFormData,
      w_service: updatedServices.join(', ') // 선택된 서비스를 쉼표로 구분
    }));
  };

  // 서비스 선택 상태 확인 함수
  const isSelected = (service) => selectedServices.includes(service);

  // 폼 데이터 변경 핸들러
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('petopia') // 테이블 이름을 여기에 넣습니다.
        .insert([formData]);

      if (error) throw error;
      alert('데이터가 성공적으로 제출되었습니다!');
    } catch (error) {
      console.error('데이터 제출 중 오류 발생:', error.message);
      alert('데이터 제출에 실패했습니다.');
    }
  };


  useEffect(() => {
    // jQuery DatePicker 초기화
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
      onSelect: (date) => {
        setFormData((prevFormData) => ({ ...prevFormData, w_day: date }));
        console.log("Selected date:", date); // 디버깅을 위한 콘솔 로그
      }
    });

    // 숫자만 입력할 수 있는 함수
    const isNumberKey = (evt) => {
      const charCode = evt.which ? evt.which : evt.keyCode;

      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }

      const inputField = evt.target;
      const currentValue = inputField.value;

      if (currentValue.length >= 11 && charCode !== 8) {
        return false;
      }

      return true;
    };

    const isCharacterKey = (evt) => {
      const charCode = evt.which ? evt.which : evt.keyCode;
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
        return true;
      }
      return false;
    };

    const input6 = document.getElementById("input6");
    const input5 = document.getElementById("input5");

    if (input6) {
      input6.addEventListener("keypress", function (event) {
        if (!isNumberKey(event)) {
          event.preventDefault();
        }
      });
    }

    if (input5) {
      input5.addEventListener("keypress", function (event) {
        if (!isCharacterKey(event)) {
          event.preventDefault();
        }
      });
    }

    // 클린업 함수
    return () => {
      if (input6) {
        input6.removeEventListener("keypress", isNumberKey);
      }
      if (input5) {
        input5.removeEventListener("keypress", isCharacterKey);
      }
    };
  }, []);  // 의존성 배열에서 formData를 제거
  

    return (
      <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
  <ul className={`d-flex ${formcss.direction}`}>
    <li className={`d-flex align-items-center ${formcss.form_box}`}>
      <label htmlFor="datepicker" className={formcss.forLabel}>선택일자</label>
      <input
        className={formcss.for_input_sele}
        type="text"
        id="datepicker"
        name="w_day"
        placeholder="날짜를 선택하세요"
      />
    </li>
      <li className={`d-flex align-items-center ${formcss.form_box}`}>
          <label htmlFor="hourSelectStart" className={formcss.forLabel}>희망시간</label>
          <select
            className={formcss.for_input}
            id="hourSelectStart"
            name="start_hour"
            value={formData.start_hour}
            onChange={handleChange}
          >
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
          </select>
          <span className={`mx-1 ${formcss.hourSelect_text}`}>:</span>
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
          <span className={`mx-1 ${formcss.hourSelect_text}`}>~</span>
          <select
            className={formcss.for_input}
            id="hourSelectEnd"
            name="end_hour"
            value={formData.end_hour}
            onChange={handleChange}
          >
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
          </select>
          <span className={`mx-1 ${formcss.hourSelect_text}`}>:</span>
          <select
            className={formcss.for_input}
            id="miuhourSelectEnd"
            name="end_minute"
            value={formData.end_minute}
            onChange={handleChange}
          >
            <option value="00">00</option>
            <option value="30">30</option>
          </select>
        </li>
  </ul>

  <ul className={`d-flex ${formcss.direction}`}>
    <li className={`d-flex align-items-center ${formcss.form_box}`}>
      <label htmlFor="petSelect" className={formcss.forLabel}>반려동물</label>
      <select
        className={`ms-auto ${formcss.for_input}`}
        id="petSelect"
        name="w_animaltype"
        placeholder="종류"
        onChange={handleChange}
      >
        <option value="" selected disabled hidden>종류</option>
        <option value="d">강아지</option>
        <option value="c">고양이</option>
        <option value="a">모두</option>
      </select>
    </li>
    <li className={`d-flex align-items-center ${formcss.form_box}`}>
      <label htmlFor="petCount" className={formcss.forLabel}>반려동물 수</label>
      <select
        className={`ms-auto ${formcss.for_input}`}
        id="petCount"
        name="w_numberofpets"
        onChange={handleChange}
      >
        <option value="">모두 몇마리인가요?</option>
        <option value="1">1마리</option>
        <option value="2">2마리</option>
        <option value="3">3마리</option>
        <option value="4">4마리</option>
        <option value="5+">5마리 이상</option>
      </select>
    </li>
  </ul>

  <ul className={`d-flex ${formcss.form_box_etc}`}>
    <li className="d-flex align-items-center">
      <label htmlFor="service" className={formcss.forLabel}>필요서비스</label>
      <div className="d-flex align-items-center justify-content-end" name="w_service">
        <input
          type="button"
          value="#산책"
          name="wk"
          className={`ms-2 pb-1 ${formcss.selectable} ${isSelected('#산책') ? formcss.selected : ''}`}
          onClick={() => toggleService('#산책')}
        />
        <input
          type="button"
          value="#목욕"
          name="wb"
          className={`ms-1 pb-1 ${formcss.selectable} ${isSelected('#목욕') ? formcss.selected : ''}`}
          onClick={() => toggleService('#목욕')}
        />
        <input
          type="button"
          value="#건강검진"
          name="wh"
          className={`ms-1 pb-1 ${formcss.selectable} ${isSelected('#건강검진') ? formcss.selected : ''}`}
          onClick={() => toggleService('#건강검진')}
        />
        <input
          type="button"
          value="#돌봄"
          name="wc"
          className={`ms-1 pb-1 ${formcss.selectable} ${isSelected('#돌봄') ? formcss.selected : ''}`}
          onClick={() => toggleService('#돌봄')}
        />
      </div>
      <div className={`d-flex align-items-center justify-content-center ${formcss.selectcount}`}>
        <select className={`ms-auto ${formcss.for_input}`} id="serviceCount" name="w_service" onChange={handleChange}>
          <option value="">필요서비스를 선택하세요</option>
          <option value="wk">산책</option>
          <option value="wb">목욕</option>
          <option value="wh">건강검진</option>
          <option value="wc">돌봄</option>
          <option value="wt">상담 후 결정</option>
        </select>
      </div>
    </li>
  </ul>

  <Address formData={formData} setFormData={setFormData} />

  <ul className={`d-flex ${formcss.direction}`}>
    <li className={`d-flex align-items-center ${formcss.form_box}`}>
      <label htmlFor="input5" className={formcss.forLabel}>보호자</label>
      <input
        className={formcss.for_input}
        type="text"
        id="input5"
        name="w_name"
        onKeyPress={(event) => {
          const charCode = event.which ? event.which : event.keyCode;
          if (!((charCode >= 65 && charCode <= 90) || // 대문자
            (charCode >= 97 && charCode <= 122) || // 소문자
            charCode === 32)) { // 공백
            event.preventDefault();
          }
        }}
        placeholder="성함을 적어주세요"
        onChange={handleChange}
      />
    </li>
    <li className={`d-flex align-items-center ${formcss.form_box}`}>
      <label htmlFor="input6" className={formcss.forLabel}>연락처</label>
      <input
        className={formcss.for_input}
        type="text"
        id="input6"
        name="w_ph"
        onKeyPress={(event) => {
          const charCode = event.which ? event.which : event.keyCode;
          if (charCode > 31 && (charCode < 48 || charCode > 57)) { // 숫자가 아닌 경우
            event.preventDefault();
          }
        }}
        placeholder="연락처를 적어주세요"
        onChange={handleChange}
      />
    </li>
  </ul>

  <button type="submit" className={`mt-3 ${formcss.subbtn}`}>구독하기</button>
</form>

    )
}

export default Form
