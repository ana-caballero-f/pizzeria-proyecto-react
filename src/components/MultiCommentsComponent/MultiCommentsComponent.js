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
  },[])

  return(
  <Container>
     {comments.map(comentario => {
     return (
      <Card className='px-6 py-3 mb-4'>
        <Card.Title>{comentario.name}</Card.Title>
        <Card.Title>{comentario.body}</Card.Title>
      </Card>
     )
     })}
  </Container>
  )

     {/* prueba con yelp */}
    //  return(
      // <Container>
        {/* {comments.reviews.map(comentario => { */}
        {/* return ( */}
        // <Card>
        {/* <Card.Title>{comentario.reviews.url}</Card.Title> */}
        {/* <Card.Text>{comentario.reviews.user}</Card.Text>  */}
        // </Card>
      // )
    // })}
    // </Container>


};

MultiCommentsComponent.propTypes = {};

MultiCommentsComponent.defaultProps = {};

export default MultiCommentsComponent;
