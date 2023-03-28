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
  <div className={styles.ContainerComments}>
  <Swiper 
      style={{
        "--swiper-navigation-color": "#000000",
        "--swiper-navigation-border": "solid black 2px"
      }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={55}
          slidesPerView={4}
          autoplay
          >

     {comments.map(comentario => {
     return (
      <div>
        <SwiperSlide className={styles.Contenedor}>
          <h4>
          <Link className={styles.TitleComments} to={`/comment/${comentario.id}`}> {comentario.name} </Link>
          </h4>
          <p className={styles.TitleParagraph}>{comentario.body}</p>
        </SwiperSlide>
      </div>
     )
     })}
     </Swiper>
  </div>
  
  )
};

MultiCommentsComponent.propTypes = {};

MultiCommentsComponent.defaultProps = {};

export default MultiCommentsComponent;
