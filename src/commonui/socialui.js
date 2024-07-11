import styled from 'styled-components';

// export const SocialPro = styled.div`
// width: 700px;
// padding-left:0;
// `;

export const Socialdiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 12px;
background-color: #b5c9ff;
padding: 0.5rem 1.5rem;
margin-bottom: 13px;
`;

export const Socialul = styled.ul`
list-style: none;
padding-right:0;
padding-left : 0;
`;

export const Sociala = styled.a`
    margin-bottom: 13px;
    background-color: #f7f8fa;
    border-radius: 12px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding-left: 1.5rem;
`;

export const Socialspan01 = styled.a`
font-size: 10px;
`
export const Socialspan02 = styled.a`
margin-right:-1.25rem;
 &:hover{
    text-decoration: underline;
 }
`
export const Socialspan03 = styled.a`
padding-right:1.5rem;
padding-bottom:1.5rem;
`


// 스와이퍼 //

export const Swieprdiv01 = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 700px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* 검정색에 투명도 조절 */
`
export const Swieprdiv02 = styled.div`
    position: absolute;
        left: 20px;
        bottom: 10px;
        color: white;
        font-size: 30px;
`