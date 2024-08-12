// Formtage.js
import React, { useState, useEffect } from "react";
import formcss from '../css/formcss.module.scss';
import Address from "../component/Address";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { supabase } from '../data/supabaseClient';

function Form() {
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

  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(updatedServices);
    setFormData({ ...formData, selectedServices: updatedServices });
  };

  const isSelected = (service) => selectedServices.includes(service);

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
        .insert([formData]);

      if (error) throw error;
      alert('Data inserted successfully!');
    } catch (error) {
      console.error('Error inserting data:', error.message);
    }
  };

  useEffect(() => {
    // jQuery DatePicker 초기화
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
      onSelect: (date) => setFormData({ ...formData, w_day: date })
    });

    // 숫자만 입력할 수 있는 함수
    const isNumberKey = (evt) => {
      const charCode = evt.which ? evt.which : evt.keyCode;

      // 숫자 입력 제한
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false; // 숫자가 아닌 경우 false 반환
      }

      // 현재 입력된 숫자 길이 체크
      const inputField = evt.target; // 이벤트 발생한 타겟 (input 필드)
      const currentValue = inputField.value; // 현재 입력값

      // 숫자 길이가 11자리인 경우 추가 입력 차단
      if (currentValue.length >= 11 && charCode !== 8) {
        return false; // 백스페이스가 아닐 경우 false 반환
      }

      return true; // 유효한 입력인 경우 true 반환
    };

    // 문자만 입력할 수 있는 함수
    const isCharacterKey = (evt) => {
      const charCode = evt.which ? evt.which : evt.keyCode;
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
        return true; // 문자인 경우 true 반환 (공백 허용)
      }
      return false; // 문자가 아닌 경우 false 반환
    };

    // 입력 필드에 이벤트 리스너 추가
    document.getElementById("input6").addEventListener("keypress", function (event) {
      if (!isNumberKey(event)) {
        event.preventDefault();
      }
    });

    document.getElementById("input5").addEventListener("keypress", function (event) {
      if (!isCharacterKey(event)) {
        event.preventDefault();
      }
    });

  }, []);
    return (
        <>
          <div className={`d-flex ${formcss.direction}`} onSubmit={handleSubmit}>
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
              <label htmlFor="datepicker" className={formcss.forLabel}>선택일자</label> 
              <input className={formcss.for_input_sele} type="text" id="datepicker" name="w_day" placeholder="날짜를 선택하세요" />
            </div>
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
              {/* 희망시간 */}
                <label htmlFor="hourSelectStart" className={formcss.forLabel}>희망시간</label> 
                <select className={formcss.for_input} id="hourSelectStart" name="w_time">
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
                <select className={formcss.for_input} id="miuhourSelectStart" name="w_time">
                  <option value="00">00</option>
                  <option value="30">30</option>
                </select>
                  <span className={`mx-1 ${formcss.hourSelect_text}`}>~</span>
                <select className={formcss.for_input} id="hourSelectEnd" name="w_time">
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
                <select className={formcss.for_input} id="miuhourSelectEnd" name="w_time">
                  <option value="00">00</option>
                  <option value="30">30</option>
                </select>
            </div>
          </div>
              {/* 반려동물, 반려동물 수 */}
                <div className={`d-flex ${formcss.direction}`}>
                  <div className={`d-flex align-items-center ${formcss.form_box}`}>
                    <label htmlFor="petSelect" className={formcss.forLabel}>반려동물</label>
                    <select className={`ms-auto ${formcss.for_input}`} id="petSelect" name="animaltype" placeholder="종류">
                      <option value="" selected disabled hidden>종류</option>
                      <option value="d">강아지</option>
                      <option value="c">고양이</option>
                      <option value="a">모두</option>
                    </select>
                  </div>
                  <div className={`d-flex align-items-center ${formcss.form_box}`}>
                    <label htmlFor="petCount" className={formcss.forLabel}>반려동물 수</label>
                    <select className={`ms-auto ${formcss.for_input}`} id="petCount" name="numerofpets">
                      <option value="">모두 몇마리인가요?</option>
                      <option value="1">1마리</option>
                      <option value="2">2마리</option>
                      <option value="3">3마리</option>
                      <option value="4">4마리</option>
                      <option value="5+">5마리 이상</option>
                    </select>
                  </div>
                </div>
              {/* 필요 서비스 */}
                <div className={`d-flex align-items-center ${formcss.form_box_etc}`}>
                  <label htmlFor="service" className={formcss.forLabel}>필요서비스</label>
                  <div className="d-flex align-items-center justify-content-end">
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

                    <div htmlFor="serviceCount"className={`d-flex align-items-center justify-content-center ${formcss.selectcount}`}>
                      <select className={`ms-auto ${formcss.for_input}`} id="serviceCount" name="serviceCount">
                        <option value="">필요서비스를 선택하세요</option>
                        <option value="wk">산책</option>
                        <option value="wb">목욕</option>
                        <option value="wh">건강검진</option>
                        <option value="wc">돌봄</option>
                        <option value="wt">상담 후 결정</option>
                      </select>
                    </div>
                  
                  </div>
              {/* 주소 */}
                        <Address />
              {/* 보호자이름, 연락처 */}
                        <div className={`d-flex ${formcss.direction}`}>
                        <div className={`d-flex align-items-center ${formcss.form_box}`}>
                        <label htmlFor="input5" className={formcss.forLabel}>보호자</label>
                        <input
                            className={formcss.for_input}
                            type="text"
                            id="input5"
                            name="w_name"
                            onKeyPress={(event) => {
                            // 문자만 입력할 수 있는 함수 호출
                            const charCode = (event.which) ? event.which : event.keyCode;
                            if (!((charCode >= 65 && charCode <= 90) || // 대문자
                                    (charCode >= 97 && charCode <= 122) || // 소문자
                                    charCode === 32)) { // 공백
                                event.preventDefault(); // 문자가 아닌 경우 입력 방지
                            }
                            }}
                            placeholder="성함을 적어주세요"
                        />
                        </div>
                        <div className={`d-flex align-items-center ${formcss.form_box}`}>
                        <label htmlFor="input6" className={formcss.forLabel}>연락처</label>
                        <input
                            className={formcss.for_input}
                            type="text"
                            id="input6"
                            name="w_ph"
                            onKeyPress={(event) => {
                            // 숫자만 입력할 수 있는 함수 호출
                            const charCode = (event.which) ? event.which : event.keyCode;
                            if (charCode > 31 && (charCode < 48 || charCode > 57)) { // 숫자가 아닌 경우
                                event.preventDefault(); // 숫자가 아닌 경우 입력 방지
                            }
                            }}
                            placeholder="연락처를 적어주세요"
                        />
                        </div>
                        </div>
                        <button type="submit" className={`mt-3 ${formcss.subbtn}`}>구독하기</button>

</>
    )
}

export default Form
