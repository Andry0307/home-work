import React, {useState} from 'react';

function StickersList(props) {
    const [stickersList, setStickersList] = useState([{
            id: Date.now(),
            title: 'dsds',
            text: 'dsds'
    }]);
    console.log('_____-stickersList', stickersList);

    function addSticker() {
        setStickersList([ ...stickersList,
            {
            id: Date.now(),
            title: '',
            text: ''
        }])
    }
    return (
        <div>
            {
            stickersList.map((item) =>
                <div key={item.id}>
                    <span>{item.title}</span>
                    <p><textarea  defaultValue={item.text}></textarea></p>
                </div>
            )
        }
        <button onClick={addSticker}>addStickers</button>
        </div>
    );
}

export default StickersList;