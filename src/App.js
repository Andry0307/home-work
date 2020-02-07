import React, {useEffect, useState} from 'react';
import './App.css';
import StickersList from "./components/StickersList";

function App() {
    const [stickersList, setStickersList] = useState([]);

    function addContact() {
       const newList = [
            ...stickersList,
            {
                id: Date.now(),
                text: ''
            }
        ];
        setStickersList(newList);
        saveData(newList)
    }

    function saveData(data) {
        localStorage.setItem('stickersList', JSON.stringify(data))
    }

    function getData() {
        let data = JSON.parse(localStorage.getItem('stickersList'));
        setStickersList(data ? data : [])
    }

    function deleteSticker(sticker) {
        console.log('sticker', sticker);
        const newStickerList = stickersList.filter((item)=>{
            return item.id !== sticker.id
        });
        setStickersList(newStickerList);
        saveData(newStickerList);
    }

    function changeSticker(change, value) {
       console.log('changing', change, value);

    }

    useEffect(()=>{
        getData()
    },[]);

  return (
    <div>
      <StickersList stickersList={stickersList}
                    onAdd={addContact}
                    onChange={changeSticker}
                    onDelete={deleteSticker}/>
    </div>
  );
}

export default App;
