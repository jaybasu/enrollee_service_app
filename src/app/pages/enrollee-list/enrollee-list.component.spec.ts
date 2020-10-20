import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EnrolleeService } from '../../services/enrollee.service';
import { FormBuilder } from '@angular/forms';
import { formErrors } from 'src/app/constants/form-error.constants';
import { EnrolleeListComponent } from './enrollee-list.component';

describe('EnrolleeListComponent', () => {
  let component: EnrolleeListComponent;
  let fixture: ComponentFixture<EnrolleeListComponent>;

  beforeEach(() => {
    const enrolleeServiceStub = () => ({
      getEnrolleeDetail: enrolleeId => ({ subscribe: f => f({}) }),
      getEnrollee: () => ({ subscribe: f => f({}) })
    });
    const formBuilderStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EnrolleeListComponent],
      providers: [
        { provide: EnrolleeService, useFactory: enrolleeServiceStub },
        { provide: FormBuilder, useFactory: formBuilderStub }
      ]
    });
    fixture = TestBed.createComponent(EnrolleeListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getAllEnrollee').and.callThrough();
      component.ngOnInit();
      expect(component.getAllEnrollee).toHaveBeenCalled();
    });
  });

  describe('getEnrolleeDetail', () => {
    it('makes expected calls', () => {
      const enrolleeServiceStub: EnrolleeService = fixture.debugElement.injector.get(
        EnrolleeService
      );
      spyOn(enrolleeServiceStub, 'getEnrolleeDetail').and.callThrough();
      component.getEnrolleeDetail();
      expect(enrolleeServiceStub.getEnrolleeDetail).toHaveBeenCalled();
    });
  });

  describe('getAllEnrollee', () => {
    it('makes expected calls', () => {
      const enrolleeServiceStub: EnrolleeService = fixture.debugElement.injector.get(
        EnrolleeService
      );
      spyOn(component, 'getCurrentEnrollee').and.callThrough();
      spyOn(enrolleeServiceStub, 'getEnrollee').and.callThrough();
      component.getAllEnrollee();
      expect(component.getCurrentEnrollee).toHaveBeenCalled();
      expect(enrolleeServiceStub.getEnrollee).toHaveBeenCalled();
    });
  });

  describe('loadAllEnrollee', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getAllEnrollee').and.callThrough();
      component.loadAllEnrollee();
      expect(component.getAllEnrollee).toHaveBeenCalled();
    });
  });
});
