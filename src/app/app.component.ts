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
    public items = [];
    public newTask: string;
    public task;

    constructor(private dataService: DataService, private httpClient: HttpClient) { }

    ngOnInit() {
        this.getLista();
    }

    public getLista() {
        this.dataService.getLista().subscribe(data => {
            this.items = data;
        });
    }

    public addToList() {
        if (this.newTask == '' || this.newTask.trim() == '') {
            return;
        }
        this.dataService.guardarTodo(this.newTask).subscribe(data => {
            this.newTask = '';
            this.getLista();
        });
    }

    public deleteTask(x: any) {
        this.dataService.eliminarTodo(x.idTodo).subscribe(data => {
            this.items = this.items.filter((elemento) => {
                return elemento.idTodo != x.idTodo;
            });
        });
    }
} 