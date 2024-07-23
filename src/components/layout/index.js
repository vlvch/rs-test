import { memo } from 'react';
import './style.css';

function Layout({ children }) {
  return (
    <div className='Layout'>
      {children}
    </div>
  )
}

export default memo(Layout);
