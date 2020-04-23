import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-report-tco',
  templateUrl: './report-tco.component.html',
  styleUrls: ['./report-tco.component.scss']
})
export class ReportTCOComponent implements OnInit {

  constructor() { }
  val:boolean = false;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Year1', 'Year2', 'Year3', 'Year4', 'Year5'];
  // barChartLabels1: Label[] = ['Aple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [4384000, 4384000, 4384000, 4384000, 4384000], label: 'EBS' },
    { data: [3272000, 3272000, 1536000, 2661000, 2661000], label: 'Cloud'}
  ];
  ngOnInit(): void {
  }
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
    },
    {
      description:' #REF'
    }
  ];
 
}
