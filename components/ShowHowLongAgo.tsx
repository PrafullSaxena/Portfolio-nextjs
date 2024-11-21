
import {howLongAgo} from "@/utils/DateUtils";

interface ShowHowLongAgoProps {
    date: Date
    text?: string
}


const ShowHowLongAgo = ({date, text} :ShowHowLongAgoProps) => {
    const {year, month, day} = howLongAgo(date);
    const dayString = day > 1 ? "Days" : "Day";
    return (
        <div className='font-thin leading-10'>
            {text && `${text} : `} {year} Year, {month} Months, {day} {dayString}
        </div>
    )
}
export default ShowHowLongAgo
