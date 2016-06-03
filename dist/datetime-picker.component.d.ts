import { ElementRef, AfterViewChecked } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { DateTime } from './datetime';
import { ChangeDetectorRef } from "@angular/core";
/**
 * show a selected date in monthly calendar
 */
export declare class DateTimePickerComponent implements AfterViewChecked {
    dateTime: DateTime;
    cdRef: ChangeDetectorRef;
    /**
     * public variables
     */
    dateOnly: boolean;
    selectedDate: Date;
    hour: number;
    minute: number;
    el: HTMLElement;
    monthData: any;
    changes: Subject<any>;
    closing: Subject<any>;
    /**
     * constructor
     */
    constructor(elementRef: ElementRef, dateTime: DateTime, cdRef: ChangeDetectorRef);
    private prevHour;
    private prevMinute;
    ngAfterViewChecked(): void;
    /**
     * getters
     */
    year: number;
    month: number;
    day: number;
    today: Date;
    initDateTime(date?: Date | String): void;
    toDate(year: number, month: number, day: number): Date;
    toDateOnly(date: Date): Date;
    /**
     * set the selected date and close it when closeOnSelect is true
     * @param date {Date}
     */
    setDayNum(dayNum?: number): void;
    /**
     * show prev/next month calendar
     */
    updateMonthData(num: number): void;
}
