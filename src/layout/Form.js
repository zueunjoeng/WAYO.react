import React from "react"
import formcss from '../css/formcss.module.scss';
import Calendar from "../component/Calendar";
import Address from "../component/Address";


function Form() {
    return (
        <>
    <section className={formcss.form_tag}>
        <div className={`${formcss.container} position-relative`}>
            <div>
                <h2 className={`pt-5 ${formcss.form_text}`}>너도 아프냐 멍? 나도 아프다 냥!</h2>
                <div className={`mt-1 mb-4 ${formcss.form_text}`}>#집중케어 #펫케어 #펫팸족</div>
            </div>

            <div id="formtag" className={`d-flex justify-content-between align-items-center ${formcss.serviceform}`}>
            <div className={`${formcss.allbox} d-flex  ${formcss.container}`}>
                {/* <!-- 왼쪽 달력 --> */}
                <Calendar />

                {/* <!-- 폼태그 --> */}
                <div className={`d-flex flex-column align-items-center justify-content-center ${formcss.form_momdiv}`}>
    <form>
        <div className="d-flex">
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
                <label htmlFor="datepicker" className={formcss.forLabel}>선택일자</label> {/* 수정된 부분 */}
                <input className={formcss.for_input_sele} type="text" id="datepicker" name="calender" placeholder="날짜를 선택하세요" />
            </div>
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
                {/* 희망시간 */}
                <label htmlFor="hourSelectStart" className={formcss.forLabel}>희망시간</label> {/* 수정된 부분 */}
                <select className={formcss.for_input} id="hourSelectStart" name="hourSelect">
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
                <select className={formcss.for_input} id="miuhourSelectStart" name="hourSelect">
                    <option value="00">00</option>
                    <option value="30">30</option>
                </select>
                <span className={`mx-1 ${formcss.hourSelect_text}`}>~</span>
                <select className={formcss.for_input} id="hourSelectEnd" name="hourSelect">
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
                <select className={formcss.for_input} id="miuhourSelectEnd" name="hourSelect">
                    <option value="00">00</option>
                    <option value="30">30</option>
                </select>
            </div>
        </div>
        {/* 반려동물, 반려동물 수 */}
        <div className="d-flex">
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
                <label htmlFor="petSelect" className={formcss.forLabel}>반려동물</label>
                <select className={`ms-auto ${formcss.for_input}`} id="petSelect" name="petSelect" placeholder="종류">
                    <option value="" selected disabled hidden>종류</option>
                    <option value="강아지">강아지</option>
                    <option value="고양이">고양이</option>
                    <option value="모두">모두</option>
                </select>
            </div>
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
                <label htmlFor="petCount" className={formcss.forLabel}>반려동물 수</label>
                <select className={formcss.for_input} id="petCount" name="petCount">
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
            <label htmlFor="service" className={formcss.forLabel}>필요서비스</label> {/* 수정된 부분 */}
            <div className="d-flex align-items-center justify-content-end">
                <span className={` ms-2 pb-1 ${formcss.selectable}`}>#산책</span>
                <span className={` ms-1 pb-1 ${formcss.selectable}`}>#목욕</span>
                <span className={` ms-1 pb-1 ${formcss.selectable}`}>#건강검진</span>
                <span className={` ms-1 pb-1 ${formcss.selectable}`}>#돌봄</span>
            </div>
        </div>
        {/* 주소 */}
        <Address />
        {/* 보호자이름, 연락처 */}
        <div className="d-flex">
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
                <label htmlFor="input5" className={formcss.forLabel}>보호자</label>
                <input className={formcss.for_input} type="text" id="input5" name="input5" onKeyPress={(event) => isCharacterKey(event)} placeholder="성함을 적어주세요" />
            </div>
            <div className={`d-flex align-items-center ${formcss.form_box}`}>
                <label htmlFor="input6" className={formcss.forLabel}>연락처</label>
                <input className={formcss.for_input} type="text" id="input6" name="input6" onKeyPress={(event) => isNumberKey(event)} placeholder="연락처를 적어주세요" />
            </div>
        </div>
        <button type="submit" className={`mt-3 ${formcss.subbtn}`}>구독하기</button>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
        <script src="/Formtag.js"></script>
        </form>
    </div>
                
            </div>
        </div>
    </div>
</section>
</>
    )
}

export default Form
