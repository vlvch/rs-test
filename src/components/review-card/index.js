import { memo } from 'react';
import './style.css';
import { uid } from 'uid';
import thumb from '../../images/thumb.svg';
import plural from '../../utils/plural';
import getMonths from '../../utils/getMonths';

function ReviewCard({ data, onClick }) {
  const {
    userName,
    userImage,
    title,
    text,
    images,
    comments,
    thumbs,
    date
  } = data

  return (
    <div key={uid()} className='ReviewCard'>
      <div className='ReviewCard-User'>
        <img className='User-Image' src={userImage} />
        <div className='User-Name'>{userName}</div>
      </div>
      <div className='ReviewCard-Title'>
        <span>{title}</span> — О городе:
      </div>
      <div className='ReviewCard-Text'>{text}</div>
      <div className='ReviewCard-Images' onClick={() => onClick(images)}>
        {images.length > 4 ? <div className='Images-Cover'>+{images.length - 4}</div> : null}
        {images.map((image) => <img className='Images-Item' key={uid()} src={image} />)}
      </div>
      <div className='ReviewCard-Footer'>
        <span className='Footer-Date'>{getMonths(date)} назад</span>
        <span className='Footer-Dot'>·</span>
        <span className='Footer-Comments'>{comments} {plural(comments, { one: 'комментарий', few: 'комментария', many: 'комментариев' })}</span>
        <img className='Footer-Image' src={thumb}></img>
        <span className='Footer-Thumbs'>{thumbs}</span>
      </div>
    </div>
  )
}

export default memo(ReviewCard);