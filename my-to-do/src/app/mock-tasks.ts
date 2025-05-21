import { Task } from './Task';

export const TASKS: Task[] = [
    { 
        priority: 1,
        id: 1, 
        name: 'Go to doctor', 
        completed: false,
        day: 'Feb 5th at 2:30pm', 
        time: "string",
        reminder: false,
    },
    { 
        priority: 1,
        id: 2, 
        name: 'Fix Car', 
        completed: false,
        day: 'March 5th at 4:30pm', 
        reminder: false,
        time: "string",
    },
    { 
        id: 3, 
        name: 'Buy Groceries', 
        completed: false,
        day: 'May 14th at 6:30pm', 
        reminder: false,
        time: "string",
        priority: 1,
    },
]