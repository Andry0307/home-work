import React from 'react';
import StickerItem from "./StickerItem";


function StickersList(props) {
    const {stickersList, onAdd, onChange, onDelete} = props;
    return (
        <>
            <button onClick={()=> onAdd()}>add sticker</button>
            {
                stickersList.map((sticker)=>
                    <StickerItem key={sticker.id}
                                 item={sticker}
                                 onChange={onChange}
                                 onDelete={onDelete}/>
                )
            }
       </>
    );
}

export default StickersList;