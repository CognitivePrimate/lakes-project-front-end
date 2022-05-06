
export default interface ShiftLog {
    author: string;
    supervisor?: string;
    logText: string;
    year: Date;
    month: Date;
    day: Date;
    hours: Date;
    minutes?: Date;
    _id?: string;
}    