import React, { useState, useEffect } from "react";
import popup from '../css/popup.module.scss';

function Popup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 상태 관리

    // 팝업 열기
    const handleTextClick = () => {
        setIsPopupOpen(true);
    };

    // 팝업 닫기
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
           <p 
                className={`fw-bold ${popup.clickableText}`}// 'styles'를 'popup'으로 변경
                onClick={handleTextClick} // 클릭 이벤트 핸들러 추가
            >
                <i className="bi bi-question-circle"></i>집중케어 정기구독이란 
            </p>

            {isPopupOpen && ( // 팝업이 열려 있을 때만 렌더링
                <div className={`${popup.popup} d-flex justify-content-center align-items-center`}>
                    <div className={popup.popupContent}>
                        <span className={popup.close} onClick={handleClosePopup}>
                            <i className="bi bi-x-circle"></i>
                        </span>
                        <div className="d-flex flex-column align-items-center mt-3 text-center">
                            <p className="d-flex align-items-center fw-bold">
                                <i className="bi bi-question-circle"></i> 집중케어 정기구독이란
                            </p>
                            <p className={popup.fs_15}>
                                노견, 치매견, 치료견과 같이 손길이 많이 필요한
                                반려동물을 위해 전문 펫시터님이 건강 상태를
                                정기적으로 체크하며, 반려동물 집중 호스피스
                                서비스를 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;
