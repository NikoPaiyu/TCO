import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router } from '@angular/router';
import { Upgrade } from '../upgrade.model';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.scss']
})
export class ClientModalComponent {
    @Input() headertype : string;
    @Input() modalCreated : string; 
    @Input() duration1 : string; 
    @Input() date1 : string; 
    @Input() cost1 : number; 
    @Input() performed2:string;
    @Input() count1:number;
    @Input() index1 : number;
    @Output() ind = new EventEmitter<number>();
    @Output() head = new EventEmitter<string>();
     
    val:any;
    delete(index1,headertype){

      this.ind.emit(index1);
      this.head.emit(headertype);

    }
    delete1(headertype){
       console.log("Head is "+headertype);
       this.head.emit(headertype);
     }
}
