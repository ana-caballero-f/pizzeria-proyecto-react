import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserForm.module.scss';

const UserForm = ({userData, handleChangeData}) => (
  <div className={styles.UserForm}>
    <form>
      <label>Nombre: </label>
      <input type="text" name="name" defaultValue={userData.name} onChange={handleChangeData} placeholder='Escribe tu nombre'></input> <br/>

      <label>Apellidos: </label>
      <input type="text" name="surname" defaultValue={userData.surname} onChange={handleChangeData} placeholder='Escribe tus apellidos'></input> <br/>

      <label>Teléfono: </label>
      <input type="text" name="telephone" defaultValue={userData.telephone} onChange={handleChangeData} placeholder='000-000-000'></input> <br/>

      <label>Email: </label>
      <input type="text" name="email" defaultValue={userData.email} onChange={handleChangeData} placeholder='nombre@email.com'></input> <br/>

      <label>Fecha: </label>
      <input type="date" name="date" defaultValue={userData.date} onChange={handleChangeData}></input> <br/>

      <label>Hora: </label>
      <input type="time" name="time" defaultValue={userData.time} onChange={handleChangeData}></input> <br/>

      <label>Nº de personas: </label>
      <input type="number" name="people" defaultValue={userData.people} onChange={handleChangeData}></input> <br/>
    
      <input type="submit"></input>
    </form>
  </div>
);

UserForm.propTypes = {};

UserForm.defaultProps = {};

export default UserForm;
