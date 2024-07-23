import { memo, useEffect, useRef, useState } from 'react';
import './style.css';
import flagIcon from '../../images/flag.svg';
import star from '../../images/star.svg';
import emptyStar from '../../images/emptyStar.svg';
import send from '../../images/send.svg';
import { uid } from 'uid';
import getDate from '../../utils/getDate';
import getDateNow from '../../utils/getDateNow';

function Chat({ userId, targetId, chat, onClick }) {
  const [message, setMessage] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  const targetData = chat.find((node) => node.id === targetId);
  const userData = chat.find((node) => node.id === userId);

  function handleClick(e) {
    e.preventDefault();
    onClick([...chat, { id: userData.id, name: userData.name, photo: userData.photo, flag: userData.flag, stars: userData.stars, text: message, date: getDateNow() }]);
    setMessage('');
  }

  const starsArray = [];
  while (starsArray.length < 5) {
    starsArray.length < targetData.stars ? starsArray.push('fill') : starsArray.push('empty');
  }

  return (
    <div className='Chat'>
      <div className='Chat-Head'>
        <img className='Head-Image' src={targetData.photo} />
        <div className='Head-Info'>
          <div className='Info-Name'>{targetData.name}</div>
          <div className='Info-Flag'>
            <img className='Flag-Icon' src={flagIcon} />
            <span>{targetData.flag}</span>
          </div>
        </div>
        <div className='Head-Stars'>
          {targetData.stars ? starsArray.map((node) => <img key={uid()} src={node === 'fill' ? star : emptyStar} />) : null}
        </div>
      </div>
      <div className='Chat-Body' ref={scrollRef}>
        {chat.map((node) => {
          const { id, photo, text, date } = node;
          return (
            <div key={uid()} className={userId === id ? "Body-Item Body-Item-highlight" : "Body-Item"}>
              <img className='Item-Photo' src={photo} />
              <div className='Item-Message'>
                <div className='Message-Text'>{text}</div>
                <div className='Message-Date'>{getDate(date)}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='Chat-Footer' >
        <img className='Chat-Footer-Image' src={userData.photo} />
        <input className='Chat-Footer-Input' value={message} onChange={(e) => setMessage(e.target.value)} />
        <img className='Chat-Footer-Icon' src={send} onClick={(e) => handleClick(e)} />
      </div>
    </div>
  )
}

export default memo(Chat);