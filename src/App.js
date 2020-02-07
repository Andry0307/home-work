import React, {useState} from 'react';
import './App.css';
import StickersList from "./components/StickersList";

function App() {
    const [stickersList, setStickersList] = useState([
        {
            id: Date.now(),
            text: 'dsds'
        }
    ]);

    function addContact() {
        console.log('adding');
        setStickersList([
            ...stickersList,
            {
                id: Date.now(),
                text: 'dsds'
            }
        ])
    }

  return (
    <div>
      <StickersList stickersList={stickersList} onAdd={addContact} />
    </div>
  );
}

export default App;
