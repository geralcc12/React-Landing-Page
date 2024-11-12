import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const FormButton = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606' )};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    font-family: 'Encode Sans Expanded';

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01bf71' )};
    }
`;

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606') };

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;
export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart? `'col1 col2'` : `'col1 col1' 'col2 col2' `)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606' )};


    @media screen and (max-width: 480px) {
    font-size: 32px;
    }   

`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff' )};
`;


export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    
`;
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;
export const Img = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

//LOGOS

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #010606;
    font-size: 24px;
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

//AGREGADO PARA EL FORMULARIO
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%; /* Puedes cambiarlo a un porcentaje o un valor fijo como '400px' */
  max-width: 500px; /* Limitar el ancho máximo si es necesario */

`;

export const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%; /* Al igual que con el input, puedes usar porcentajes o valores fijos */
  max-width: 500px; /* Limitar el ancho máximo */
  height: 150px; /* Puedes ajustar la altura para hacerlo más grande o más pequeño */
`;

export const Label = styled.label`
  max-width: 540px;
    padding-top: 0;
    color: #010606;
`;