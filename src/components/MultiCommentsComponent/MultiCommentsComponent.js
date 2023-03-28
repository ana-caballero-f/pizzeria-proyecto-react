import React from 'react';
import PropTypes from 'prop-types';
import styles from './MultiCommentsComponent.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getComments} from '../../store/comentarios/actions';
import { Link } from 'react-router-dom';

import { Card, Container } from 'react-bootstrap';

import { Navigation, Pagination, A11y, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';



const MultiCommentsComponent = () => {
  const dispatch = useDispatch()

  const {comments, loadingComments} = useSelector((state) => state.ComentariosReducer)

  useEffect(() => {
    dispatch(getComments())
  },[])

  return(
  <Container>
  
  <Swiper 
      style={{
        "--swiper-navigation-color": "#000000",
        "--swiper-navigation-border": "solid black 2px"
        // "--swiper-pagination-color": "#000000",
      }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={55}
          slidesPerView={3}
          // navigation
          // pagination={{ clickable: true, loop: true }}
          // autoplay
          >

     {comments.map(comentario => {
     return (
      <Card className='px-6 py-3 mb-4'>
      <SwiperSlide>
        <Card.Title>
        <Link to={`/comment/${comentario.id}`}> {comentario.name} </Link>
        </Card.Title>
        <Card.Title>{comentario.body}</Card.Title>
        </SwiperSlide>
      </Card>
     )
     })}
     </Swiper>
  </Container>
  )


};

MultiCommentsComponent.propTypes = {};

MultiCommentsComponent.defaultProps = {};

export default MultiCommentsComponent;
