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

      <div className={styles.Contacto}>

      <h2>CONTACTA CON NOSOTROS</h2>
        <p> ☎️ 777-777-777 </p>
        <p> 📍 C/ Arroyo, 17. Madrid</p>
        <p> 📧 vecchianapoli@gmail.com</p> 
        <p> ⏰ de 13:00h-16:00h / 19:30h-23:00h </p>
        <h4>Lunes cerrado por descanso</h4> 
      
      </div>


    
      <div className={styles.Formulario}>
        <h2>HAZ TU RESERVA</h2>

        {/* Importo el formulario y le paso por props el estado y la función para recoger los nuevos datos desde el formulario */}
        <section>
          <UserForm userData={userData} handleChangeData={changeData}></UserForm>
        </section>

        {/*  
        <section>
          <h3>{`nombre: ${userData.name} y son ${userData.people}personas a las ${userData.time} el día ${userData.date}`}</h3>
        </section>
        */}
      </div>

  </div>
);
}
ReservasComponent.propTypes = {};

ReservasComponent.defaultProps = {};

export default ReservasComponent;
