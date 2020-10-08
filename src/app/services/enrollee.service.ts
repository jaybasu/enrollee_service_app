import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Enrollee } from '../models/enrollee.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/enrollees'
  constructor(private http: HttpClient) {}


  /**
   * Get employee list
   */
  getEmployee(): Observable<Enrollee[]> {
    return this.http.get<Enrollee[]>(this.baseUrl)
      .pipe(
        tap(listOfEmployee => {return listOfEmployee}),
        catchError(this.handleError('getEmployee', []))
      );
  }


  /**
   * Get employee details
   */
  getCustomer(id: string): Observable<Enrollee> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Enrollee>(url)
      .pipe(
        tap(customer => console.log('fetched employee')),
        catchError(this.handleError<Enrollee>(`getHero id=${id}`))
      )
  }

  /**
   * Update employee details
   */
  updateCustomer(employee: Enrollee): Observable<any> {
    const url = `${this.baseUrl}/${employee.id}`;
    return this.http.put(url, employee, httpOptions)
      .pipe(
        tap(_ => console.log(`updated employee: id=${employee.id}`)),
        catchError(this.handleError<Enrollee>('updateEmployee'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
