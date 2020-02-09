import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumListComponent } from './num-list.component';

describe('NumListComponent', () => {
  let component: NumListComponent;
  let fixture: ComponentFixture<NumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
