import React from 'react';

function StickerItem(props) {

    const {item, onChange, onDelete} = props;

    function changeSticker(item, e) {
        onChange(
            item, e.target.value
        )
    }
    
    function deleteSticker() {
        onDelete(props.item)
    }

    return (
        <div>
            <label onClick={()=> deleteSticker()} className='dell_label'>x</label>
            <textarea value={item.text}
                name={item.id}
                onChange={(e)=> changeSticker(item,e)}>
            </textarea>
        </div>
    );
}

export default StickerItem;