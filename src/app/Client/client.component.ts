import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery' 
import { Upgrade } from '../upgrade.model';
import {Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  
    questionTopicList = [
      {
        id : 1,
      title: 'Opportunity',
      description: 'Is there an opportunity ?',
        totalQuestions : 30 ,
        completedQuestions : 0
    },
      {
        id : 2,
        title: 'Compete',
        description: 'Can we Compete ?',
        totalQuestions : 20 ,
        completedQuestions : 0
      },
      {
        id : 3,
        title: 'Winning',
        description: 'Can we win ?',
        totalQuestions : 25 ,
        completedQuestions : 0
      },
      {
        id : 4,
        title: 'Worth Wining',
        description: 'Is it worth winning ? ',
        totalQuestions : 40 ,
        completedQuestions : 10
      }];
  
    questionList = [{
      title: 'Short Term Revenue',
      // tslint:disable-next-line:max-line-length
      description: 'Financials'
    },
      {
        description: 'Advanced Collections'
      },
      {
        description: 'Internet Expenses'
      },
      {
        description: 'iReceivables'
      },
      {
        description: 'Treasury'
      },
      {
        description: 'Financials Accounting Hub'
      },
      {
        description: 'Project Costing'
      },
      {
        description: 'Project Resource Management'
      },
      {
        description: 'Project Collaboration'
      },
      {
        description: 'Project Management'
      },
      {
        description: 'Project Portfolio Analysis'
      },
      {
        description: 'Project Contracts'
      },
      {
        description: 'Project Procurement'
      },
      {
        description: 'Discrete Manufacturing'
      },
      {
        description: 'Process Manufacturing'
      },
      {
        description: 'Manufacturing'
      },
      {
        description: 'Operations Center'
      },
      
      {
        description: 'Purchasing'
      },
      {
        description: 'iProcurement'
      },
      {
        description: 'Supplier Lifecycle Management'
      },
      {
        description: 'Outreach'
      },
      {
        description: 'Activity Management Gateway'
      },
      {
        description: 'Application Object Library'
      },
      {
        description: 'Cost Management'
      },  
      {
        description: 'EDI Gateway'
      },
      {
        description: 'eMail Center'
      },
      {
        description: 'Exchange Market Place Financial Services Accounting Hub'
      },
      {
        description: 'Inventory Management'
      },  
      {
        description: 'iSupplier Portal'
      },
      {
        description: 'Mobile Supply Chain Application'
      },		
      {
        description: 'Order Entry'
      },
      {
        description: 'Procurement Contracts'
      },
      {
        description: 'Oracle Applications System Bundle'
      },
      {
        description: 'Oracle Configurator Developer'
      },
      {
        description: 'Oracle Contracts Core'
      },
      {
        description: 'Oracle Contracts for Sales'
      },
      {
        description: 'Oracle Governance, Risk, & Compliance Manager'
      },
      {
        description: 'Product Lifecycle Management'
      },
      {
        description: 'Project Billing'
      },
      {
        description: 'Project Bundle'
      },
      {
        description: 'Quality'
      },
      {
        description: 'Self-Service Work Requests'
      },
      {
        description: 'Service Contracts'
      },
      {
        description: 'Service Procurement'
      },
      {
        description: 'Sourcing'
      },
      {
        description: 'Warehouse Management'
      },
      {
        description: 'Workflow Cartridge'
      }		
    ];  
    type='';
    
  constructor(private route:Router){

  }
    upgradetype:any='';
    duration:any='';
    date:any=''
    cost:any='';
    val:any;
    val1:any='no';
    val2:any;
    perf:any='';
    infcount1:number=1;
    appcount1:number=1;
    count1:number;
   // @ViewChild('upgradetype') newServerName :ElementRef; 
   
    appUpgrades  : Upgrade[] = [
      new Upgrade('APPLICATION','','','' ,1 ,'',1),
      new Upgrade('INFRASTRUCTURE','','','' ,1,'',1)
    ];
    value:any=false;
    header:any='';
    link:string;
    header1:any;
    addingModal1(header1:string, type: string, duration1: string,date:string,cost:number,perf:string)
    {
      if(header1 === 'APPLICATION'){
        this.appcount1=this.appcount1+1;
        this.count1 = this.appcount1;
      }
      else if(header1 === 'INFRASTRUCTURE'){
        this.infcount1=this.infcount1+1;
        this.count1 = this.infcount1;
      }
       
         this.appUpgrades.push(
           new Upgrade(header1,type,duration1,date,cost,perf,this.count1)
         );
    }
    index:any;
    choseToDelete1(count1:number){
     
      this.index= ++count1;
      this.appUpgrades.splice(--count1,1);
      console.log("count is "+count1+" index is "+this.index);
     
    }
    
    
    ngOnInit(){
      window.scrollTo(0,0);


      $('#save').on('click', function() {
         $(".appUpgrade").show("200");
    
      });

  }
  Url(){
    this.link = window.location.href;
    if(this.link == 'http://localhost:4200/client')
    {
      this.route.navigate(['/oracle']);
    }  
  }

  Output(){
    this.route.navigate(['/report']);

  }
}
