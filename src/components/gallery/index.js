import { memo, useState } from "react";
import { uid } from "uid";
import './style.css'

function Gallery({ images, onClick }) {
  const [active, setActive] = useState(0);

  return (
    <div className="Gallery" onClick={() => onClick([])}>
      <div className="Gallery-Block" onClick={(e) => e.stopPropagation()}>
        <div className="Gallery-ActiveItem">
          <img className="ActiveItem-Image" src={images[active]} />
        </div>
        <div className="Gallery-Items">
          {images.map((image, index) => {
            return <img className={index === active ? "Gallery-Item Gallery-Item-active" : "Gallery-Item"} key={uid()} src={image} onClick={(e) => {
              e.stopPropagation();
              setActive(index);
            }} />
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(Gallery);