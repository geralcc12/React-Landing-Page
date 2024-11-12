import React from 'react';


import { useState } from 'react';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Input,
    TextArea,
    Form,
    Label,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    FormButton
} from './ContactElements.js';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from'react-icons/fa';
import axios from 'axios';


const InfoSection = ({lightBg,id,imgStart,topLine,
                    lightText,headline,darkText,description,buttonLabel,
                    }) => {
                    
                      const [formData, setFormData] = useState({
                        name: '',
                        email: '',
                        message: ''
                      });
                    
                      const handleChange = (e) => {
                        const { name, value } = e.target;
                        setFormData({ ...formData, [name]: value });
                      };
                      
                      const handleSubmit = async (e) => {
                        e.preventDefault();
                        try {
                          const response = await axios.post('http://localhost:5000/api/servicios', formData);
                          console.log(response.data);
                          alert('Correo enviado exitosamente');
                        } catch (error) {
                          console.error('Error al enviar el formulario:', error);
                          alert('Hubo un problema al enviar el formulario');
                        }
                        setFormData({
                          name: '',
                          email: '',
                          message: ''
                        });
                      }
                          
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
            <InfoRow imgStart={imgStart} > 
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine> 
                    <Heading lightText={lightText} >{headline}</Heading>
                    <Subtitle darkText={darkText} >{description}</Subtitle>
                    <SocialMedia>
                <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook" ><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram" ><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube" ><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter" ><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin" ><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
                   
                </TextWrapper>
                </Column1>
                <Column2>
                <Form id='form' onSubmit={handleSubmit}>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <Label htmlFor="message">Mensaje</Label>
                <TextArea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
               <BtnWrap>
                  <FormButton>{buttonLabel}</FormButton>
               </BtnWrap>
              </Form>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>    
    </>
  )
}

export default InfoSection