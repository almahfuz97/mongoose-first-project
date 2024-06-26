type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export const months: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export interface IAcademicSemester {
  name: 'Autumn' | 'Summer' | 'Fall';
  code: '01' | '02' | '03';
  year: string;
  startMonth: TMonth;
  endMonth: TMonth;
}

export interface IAcademicSemesterNameAndCode {
  Autumn: '01';
  Summer: '02';
  Fall: '03';
}
