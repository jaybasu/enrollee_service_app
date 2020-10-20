import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Enrollee } from '../models/enrollee.model';
import { EnrolleeService } from './enrollee.service';

describe('EnrolleeService', () => {
  let service: EnrolleeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnrolleeService]
    });
    service = TestBed.get(EnrolleeService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('updateEnrolleeDetail', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      const enrolleeStub: Enrollee = <any>{
        id: 'test-id',
        active: true,
        name: 'tset name',
        dateOfBirth: '1962-11-3',
      };
      service.updateEnrolleeDetail(enrolleeStub).subscribe(res => {
        expect(res).toEqual(enrolleeStub);
      });
      const req = httpTestingController.expectOne('http://localhost:8080/enrollees/test-id');
      expect(req.request.method).toEqual('PUT');
      req.flush(enrolleeStub);
      httpTestingController.verify();
    });
  });

  describe('getEnrollee', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getEnrollee().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne(
        'http://localhost:8080/enrollees'
      );
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
