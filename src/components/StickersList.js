import React from 'react';
import StickerItem from "./StickerItem";


function StickersList(props) {
    console.log(props);
    const {stickersList, onAdd} = props;
    return (
        <>
            <button onClick={()=> onAdd()}>add</button>
            {
                stickersList.map((sticker)=>
                    <StickerItem key={sticker.id} item={sticker} />
                )
            }
       </>
    );
}

export default StickersList;