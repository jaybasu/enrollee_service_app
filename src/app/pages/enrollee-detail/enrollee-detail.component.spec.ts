import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EnrolleeService } from '../../services/enrollee.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { formErrors } from '../../constants/form-error.constants';
import { EnrolleeDetailComponent } from './enrollee-detail.component';

describe('EnrolleeDetailComponent', () => {
  let component: EnrolleeDetailComponent;
  let fixture: ComponentFixture<EnrolleeDetailComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } }
    });
    const routerStub = () => ({ navigate: array => ({}) });
    const enrolleeServiceStub = () => ({
      getEnrolleeDetail: enrolleeId => ({ subscribe: f => f({}) }),
      updateEnrolleeDetail: enrollee => ({ subscribe: f => f({}) })
    });
    const formBuilderStub = () => ({});
    const locationStub = () => ({ back: () => ({}) });
    TestBed.configureTestingModule({
      declarations: [EnrolleeDetailComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: EnrolleeService, useFactory: enrolleeServiceStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: Location, useFactory: locationStub }
      ]
    });
    fixture = TestBed.createComponent(EnrolleeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getEnrolleeDetail').and.callThrough();
      component.ngOnInit();
      expect(component.getEnrolleeDetail).toHaveBeenCalled();
    });
  });

  describe('getEnrolleeDetail', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const enrolleeServiceStub: EnrolleeService = fixture.debugElement.injector.get(
        EnrolleeService
      );
      spyOn(component, 'setData').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(enrolleeServiceStub, 'getEnrolleeDetail').and.callThrough();
      component.getEnrolleeDetail();
      expect(component.setData).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(enrolleeServiceStub.getEnrolleeDetail).toHaveBeenCalled();
    });
  });

  describe('goBack', () => {
    it('makes expected calls', () => {
      const locationStub: Location = fixture.debugElement.injector.get(
        Location
      );
      spyOn(locationStub, 'back').and.callThrough();
      component.goBack();
      expect(locationStub.back).toHaveBeenCalled();
    });
  });

  describe('updateEnrolleeDetail', () => {
    it('makes expected calls', () => {
      const enrolleeServiceStub: EnrolleeService = fixture.debugElement.injector.get(
        EnrolleeService
      );
      spyOn(component, 'goBack').and.callThrough();
      spyOn(enrolleeServiceStub, 'updateEnrolleeDetail').and.callThrough();
      component.updateEnrolleeDetail();
      expect(component.goBack).toHaveBeenCalled();
      expect(enrolleeServiceStub.updateEnrolleeDetail).toHaveBeenCalled();
    });
  });
});
