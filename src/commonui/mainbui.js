import styled from 'styled-components';

export const Mswiper = styled.div`
 padding: 160px 38px 84px 68px;
 @media (max-width: 768px) {
       padding: 0;
    }
`;

// export const Ptext01 = styled.p`
// /* mainbannerText */
//     white-space: nowrap;
//     font-family: Noto+Sans+KR;
//     line-height: 51px;
//     font-weight: bold;
//     color: #3D71FF;
//     font-size: 3.5rem;
// `;
export const Ptext02 = styled.p`
/* mainbannerText_en */
    font-family: Quicksand;
    line-height: 1.8rem;
    color: #3D71FF;
    font-weight: bold;
    font-size: 3.3rem;

    @media (max-width: 1200px) {
        font-size: 2.5rem;
    }
    @media (max-width: 992px) {
        font-size: 2rem;
    }
    @media (max-width: 768px) {
        font-size: 1.7rem;
        line-height: 1.2rem;
    }
`;


export const Ptext03 = styled.p`
/* mainbannerText_kr */
    font-family: Noto+Sans+KR;
    line-height: 0.8rem;
    color: #3D71FF;
    font-size: 1.2rem;

    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    @media (max-width: 992px) {
        font-size: 0.8rem;
    }
`;
// export const Ptext04 = styled.p`
// /* mainbanner_text */
//     font-family: Noto+Sans+KR;
//     font-size: 16px;
//     line-height: 19px;
//     color: #666666;
// `;