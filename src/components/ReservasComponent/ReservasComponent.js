import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReservasComponent.module.scss';
import { useState } from 'react';
import UserForm from '../UserForm/UserForm';

const ReservasComponent = () => {

  //Defino el objeto con los valores que se recogerán desde el formulario
  const initialState = {name: "", surname: "", telephone:"",  email: "", date:"", time:"", people:0}
  
  //Defino el estado dando por defecto los valores iniciales del objeto
  const [userData, setUserData] = useState(initialState)

  //Función para cambiar los campos del formulario haciendo un spread operator del objeto:
  function changeData(e){
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  
  return ( 
    <div className={styles.ReservasComponent}>
    <h1>HAZ TU RESERVA:  </h1>

    {/* Importo el formulario y le paso por props el estado y la función para recoger los nuevos datos desde el formulario */}
    <section>
      <UserForm userData={userData} handleChangeData={changeData}></UserForm>
    </section>

    <section>
    <h3>{`nombre: ${userData.name} y son ${userData.people}personas a las ${userData.time} el día ${userData.date}`}</h3>
    </section>
  </div>
);
}
ReservasComponent.propTypes = {};

ReservasComponent.defaultProps = {};

export default ReservasComponent;
