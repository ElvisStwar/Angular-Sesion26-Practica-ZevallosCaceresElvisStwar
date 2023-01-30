import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  lista:any[]=[]

  constructor(private data:UserServiceService){}

  ngOnInit(): void {
    this.data.getAll().subscribe(data => console.log(data));
    this.data.getAll().subscribe(data => this.lista = data);

  }

}
