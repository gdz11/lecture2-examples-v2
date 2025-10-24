export interface Course {
    id: number;
    name: string;
    code: string;
    credits: number;
    type: 'required' | 'elective';
    status: CourseStatus;
}

export enum CourseStatus {
    Active,
    Disabled,
    Archived
}