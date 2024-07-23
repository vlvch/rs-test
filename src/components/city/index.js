import { memo } from 'react';
import './style.css';
import barcelone from '../../images/barcelone.png'

function City() {
  return (
    <div className='City'>
      <img className='City-img' src={barcelone} alt='barcelone' />
      <div className='City-body'>
        <div className='Body-title'>Барселона — обзор города</div>
        <div className='Body-text'>Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...</div>
        <a href='#' className='Body-continue'>Читать дальше</a>
      </div>
    </div>
  )
}

export default memo(City);