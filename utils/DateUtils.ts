import {CustomDate} from "@/data/Types";
import {
    differenceInDays, differenceInMonths,
    differenceInYears
} from "date-fns";

export function howLongAgoString(date: Date) : string {
    const customDate = howLongAgo(date);
    const {year, month, day} = customDate;

    const yearString = year > 0 ? `${year} year${year > 1 ? 's' : ''}` : '';
    const monthString = month > 0 ? `${month} month${month > 1 ? 's' : ''}` : '';
    const dayString = day > 0 ? `${day} day${day > 1 ? 's' : ''}` : '';

    return `${yearString} ${monthString} ${dayString}`;
}


export function howLongAgo(inputDate: Date): CustomDate {
    const now = new Date();

    const year = differenceInYears(now, inputDate);
    const month = differenceInMonths(now, inputDate) % 12;
    const day = differenceInDays(now, inputDate) % 30;

    // Will be implemented later
    // const hour = differenceInHours(now, inputDate) % 24;
    // const minute = differenceInMinutes(now, inputDate) % 60;
    // const second = differenceInSeconds(now, inputDate) % 60;

    // Return as a CustomDate object
    return {
        year,
        month,
        day,
        // hour,
        // minute,
        // second
    };
}

