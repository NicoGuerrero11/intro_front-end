import { useState } from 'react';
import styles from './StickerPad.module.css'
import { getStickers } from './stickers.data.js';

function StickersPad() {

    const [stickers, setStickers] = useState([]);

    function addSticker(){
        const newSticker = getStickers()
        const nextStickers = [... stickers, newSticker]
        setStickers(nextStickers)
    }
  return (
    <button className={styles.stickerPad} onClick={addSticker}>
        {stickers.map((sticker) =>(
            <img src = {sticker.src} />
        ))}
    </button>
  )
}

export default StickersPad