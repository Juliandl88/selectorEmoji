import { forwardRef, useState } from "react"
import {Data as emojiList} from "./data"
import EmojiSearch from "./emojiSerch"

export function EmojiPicker(props, inputRef) {

    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);

    function handleClickOpen() {
        setIsOpen(!isOpen);
    }

    function handleSearch(e){
        const query = e.target.value.toLowerCase;
        if(query){
            const search = emojiList.filter(emoji => {
                return (
                    emoji.name.toLowerCase().includes(query) || 
                    emoji.keywords.toLowerCase().includes(query)
                );
            })
            setEmojis(search);
        }else{
            setEmojis(emojiList);
        }
    }

    function EmojiPickerContainer(){
        return <div>
            <EmojiSearch onSearch={handleSearch}/>
            <div>
                {
                    emojiList.map((emoji) => (
                    <div key={emoji.symbol}>{emoji.symbol}</div>
                    ))
                }
            </div>
        </div>
    }

    return <div>
        <button onClick={handleClickOpen}>😉</button>
        {isOpen ? <EmojiPickerContainer /> : ""}
    </div>
}

export default forwardRef(EmojiPicker);