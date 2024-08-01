import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
 } from './ServicesElements';

const Services = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/servicios')
      .then(response => {
        setServicios(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos: ", error);
      });
  }, []);

  return (
    <ServicesContainer id="services">
        <ServicesH1>Tus Servicios</ServicesH1>
        <ServicesWrapper>
          {servicios.map(servicio => (
            <ServicesCard key={servicio._id}>
                <ServicesIcon src={require(`../../${servicio.imagen}`)} />{/* Puedes mapear las imágenes con los datos obtenidos si están disponibles */}
                <ServicesH2>{servicio.nombre}</ServicesH2>
                <ServicesP>{servicio.dscp}</ServicesP>
            </ServicesCard>
          ))}
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
