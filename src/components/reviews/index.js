import { memo, useState } from 'react';
import ReviewCard from '../review-card';
import './style.css';
import dot from 'images/dot.svg';
import activeDot from 'images/activeDot.svg'
import { uid } from 'uid';

function Reviews({ list = [], onClick }) {
  const [active, setActive] = useState(0);

  return (
    <div className='Reviews'>
      <div className='Reviews-Cover'></div>
      <div className='Reviews-Title'>Отзывы о Барселоне</div>
      <div className='Reviews-Cards'>
        <div className='Cards-Arrows'>
          <div onClick={() => { setActive(active === 0 ? list.length - 2 : active - 1) }} className='Arrows-Item'>←</div>
          <div onClick={() => { setActive(list.length - 2 === active ? 0 : active + 1) }} className='Arrows-Item'>→</div>
        </div>
        {list.map((data, index) => active > index ? null : <ReviewCard key={uid()} data={data} onClick={onClick} />)}
      </div>
      <div className='Reviews-Footer'>
        <button className='Footer-Button'>Все отзывы</button>
        <div className='Footer-Dots'>
          {list.map((data, index) => {
            {
              return index < list.length - 1 ?
                <img
                  className='Dots-Item'
                  onClick={() => { setActive(index) }}
                  key={uid()}
                  src={index === active ? activeDot : dot}
                />
                :
                null
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(Reviews);