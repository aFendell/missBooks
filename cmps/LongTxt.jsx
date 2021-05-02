// import { booksService } from "../services/books-service.js";

export function LongText({ txt, isLongTxtShown }) {
    console.log('description from LongTxt:', txt);
    console.log('isLongTxtShown:', isLongTxtShown);

    if (!isLongTxtShown) {
        return <p>{txt.substring(0, 99)}{<span onclick={() => onToggleLongTxt(txt)}>read more</span>}</p>
    } else {
        return <p>{txt}{<span onclick={() => onToggleLongTxt(txt)}>read less</span>}</p>
    }
}