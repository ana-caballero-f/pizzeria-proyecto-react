import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentComponent.module.scss';
import { useSelector } from 'react-redux';


const CommentComponent = () => {

  const { comment, loadingSingleComment } = useSelector((state) => state.ComentariosReducer)


  return(
  <div className={styles.CommentComponent}>
    <h4 className={styles.CommentTitle}> {comment.name} </h4>
      <p className={styles.CommentBody}> {comment.body} </p>
      <p className={styles.CommentData}>Identificador número: {comment.id} </p>
      <p className={styles.CommentData}>{comment.email} </p> 
  </div>
  )

};

CommentComponent.propTypes = {};

CommentComponent.defaultProps = {};

export default CommentComponent;
