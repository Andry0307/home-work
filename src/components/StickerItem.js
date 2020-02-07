import React from 'react';

function StickerItem(itemSticker) {
    return (
        <div>
            <textarea>{itemSticker.text}</textarea>
        </div>
    );
}

export default StickerItem;