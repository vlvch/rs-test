import { memo, useState } from 'react';
import './style.css';
import Chat from '../chat';

function Chats({ list }) {
  const [chat, setChat] = useState(list);

  return (
    <div className='Chats'>
      <div className='Chat-Item'>
        <span className='Item-Title'>Чат с пользователем</span>
        <Chat userId={1} targetId={2} chat={chat} onClick={setChat} />
      </div>

      <div className='Chats-Separator'></div>
      <div className='Chat-Item'>
        <span className='Item-Title'>Чат с администратором</span>
        <Chat userId={2} targetId={1} chat={chat} onClick={setChat} />
      </div>

    </div>
  )
}

export default memo(Chats);