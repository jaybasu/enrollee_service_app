import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInlineErrorComponent } from './form-inline-error.component';

describe('FormInlineErrorComponent', () => {
  let component: FormInlineErrorComponent;
  let fixture: ComponentFixture<FormInlineErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInlineErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInlineErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
