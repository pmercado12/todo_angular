import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items = [];
    private REST_API_SERVER =environment.apiHost;
    constructor(private dataService: DataService, private httpClient: HttpClient) { }
    ngOnInit() {
        this.dataService.sendGetRequest("todos").subscribe((data: any[]) => {
            console.log(data);
            this.items = data;
        })
    }

    /* A two-way binding performed which 
       pushes text on division */
    public newTask;
    public task;
    /* When input is empty, it will 
       not create a new division */
    public addToList() {
        if (this.newTask == '') {
        }
        else {
            this.httpClient.post(this.REST_API_SERVER + "todo?descripcion=" + this.newTask,{}).subscribe({
                complete: () => {
                    this.dataService.sendGetRequest("todos").subscribe((data: any[]) => {
                        console.log(data);
                        this.items = data;
                    })
                },
            });

            this.newTask = '';
        }
    }

    /* This function takes to input the 
       task, that has to be deleted*/
    public deleteTask(index) {
        this.items.splice(index, 1);
    }
} 