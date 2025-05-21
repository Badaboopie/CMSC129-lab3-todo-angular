export interface Task {
    id?: number;
    name: string;
    completed: boolean;
    day: string;
    time: string;
    reminder: boolean;
    priority: number;
}