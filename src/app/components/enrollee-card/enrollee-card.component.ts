import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-enrollee-card',
  templateUrl: './enrollee-card.component.html',
  styleUrls: ['./enrollee-card.component.scss']
})
export class EnrolleeCardComponent implements OnInit {
  @Input() employee: Employee[];
  // @Output() delete = new EventEmitter<Employee>();
  constructor() {
  }

  ngOnInit() {
  }

}
