import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommentComponent.module.scss';
import { useSelector } from 'react-redux';


const CommentComponent = () => {

  const { comment, loadingSingleComment } = useSelector((state) => state.ComentariosReducer)


  return(
  <div className={styles.CommentComponent}>
    {comment.name}
    {comment.body}
    {comment.id}
    {comment.email}
    
  </div>
  )

};

CommentComponent.propTypes = {};

CommentComponent.defaultProps = {};

export default CommentComponent;
