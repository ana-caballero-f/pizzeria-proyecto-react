import React from 'react';
import PropTypes from 'prop-types';
import styles from './MultiCommentsComponent.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getComments} from '../../store/comentarios/actions';
import { Card, Container } from 'react-bootstrap';


const MultiCommentsComponent = () => {
  const dispatch = useDispatch()

  const {comments, loadingComments} = useSelector((state) => state.CommentsReducer)

  useEffect(() => {
    dispatch(getComments())
  }, [])

  return(
  <Container>
     {comments.map(comentario => {
     return (
      <Card>
        <Card.Title>{comentario.name}</Card.Title>
        <Card.Text>{comentario.body}</Card.Text> 
      </Card>
     )
     })}
  </Container>
  )
};

MultiCommentsComponent.propTypes = {};

MultiCommentsComponent.defaultProps = {};

export default MultiCommentsComponent;
