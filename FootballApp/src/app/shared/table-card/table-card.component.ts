import { Component, OnInit } from '@angular/core';
import {League} from "../../model/league";
import {DataHandlerService} from "../../service/data-handler.service";
@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.css']
})
export class TableCardComponent implements OnInit {
  leagues: League[];

  constructor(private dataHandler: DataHandlerService) {
  }


  //Метод вызывается после инициализации компонента
  ngOnInit(): void {
    this.leagues = this.dataHandler.getCategories()
    console.log(this.leagues)
  }
//Метод вызывается после инициализации компонента

}
