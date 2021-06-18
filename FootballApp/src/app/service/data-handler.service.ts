import { Injectable } from '@angular/core';
import {League} from "../model/league";
import {TestData} from "../data/TestData";
@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): League[]{
    return TestData.leagues;
  }

}
