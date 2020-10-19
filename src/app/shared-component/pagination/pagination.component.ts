import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  MyPagination
} from '../../models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  public pagesArray: Array < number > = [];
  public currentPage = 1;

  constructor() {}

  @Input() set setPagination(pagination: MyPagination) {
    if (pagination) {
      const pagesAmount = Math.ceil(
        pagination.itemsCount / pagination.pageSize
      );
      this.pagesArray = new Array(pagesAmount).fill(1);
    }
  }
  @Output() goToPage = new EventEmitter < number > ();
  public setPage(pageNumber: number): void {
    if (pageNumber !== this.currentPage && pageNumber > 0 &&  pageNumber <= this.pagesArray.length) {
      this.currentPage = pageNumber;
      this.goToPage.emit(pageNumber);
      return;
    }
    else if (pageNumber < 1 &&  pageNumber > this.pagesArray.length) {
      return;
    }
  }
}
