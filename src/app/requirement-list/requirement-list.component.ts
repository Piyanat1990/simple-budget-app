import { Component } from '@angular/core';
import { Requirement } from '../requirement';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent {
  requirements:Requirement[]= [

  ]
  
}
