import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Enrollee } from '../models/enrollee.model';
import { EnrolleeService } from './enrollee.service';

export const mockEnrollee: Enrollee[] =  [
  {
    id: '36653835-fbe0-4c42-a93c-3e561823934f',
    active: true,
    name: 'Gabe Newell',
    dateOfBirth: '1962-11-3',
  },
  {
    id: 'ed9f9e35-9767-4586-a19b-903661aa859d',
    active: true,
    name: 'Todd Howard',
    dateOfBirth: '1971-04-25',
  },
  {
    id: 'e8637db3-3549-43ee-8e20-45b8fcb5a370',
    active: false,
    name: 'Reggie Fils-Aime',
    dateOfBirth: '1961-03-25',
  },
  {
    id: '8b8b9cf0-652e-4b82-a7ca-e9ed47e69be4',
    active: false,
    name: 'Hideki Kamiya',
  },
  {
    id: 'f445416d-82c2-4acd-b371-35567d5fd757',
    active: true,
    name: 'Cliffy B',
    dateOfBirth: '1975-02-12',
  },
];

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

  // describe('updateEnrolleeDetail', () => {
  //   it('makes expected calls', () => {
  //     const httpTestingController = TestBed.get(HttpTestingController);
  //     const enrolleeStub: Enrollee = <any>{
  //       id: 'test-id',
  //       active: true,
  //       name: 'tset name',
  //       dateOfBirth: '1962-11-3',
  //     };
  //     service.updateEnrolleeDetail(enrolleeStub).subscribe(res => {
  //       expect(res).toEqual(enrolleeStub);
  //     });
  //     const req = httpTestingController.expectOne('http://localhost:8080/enrollees/test-id');
  //     expect(req.request.method).toEqual('PUT');
  //     req.flush(enrolleeStub);
  //     httpTestingController.verify();
  //   });
  // });

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
