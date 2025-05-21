import { inject, Injectable } from "@angular/core";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Task } from "../Task";

@Injectable({providedIn: 'root'})
export class TaskFireBaseService {
    getTask():Observable<Task[]> {
        const firestore = inject(Firestore);
        const tasksCollection = collection(firestore, 'Tasks');

        return collectionData(tasksCollection, {
            idField: 'id',
        }) as Observable<Task[]>;
    }
}