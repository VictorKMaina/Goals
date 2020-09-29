import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  deleteAlert(message: string){
    alert(message);
  }

  constructor() { }
}
