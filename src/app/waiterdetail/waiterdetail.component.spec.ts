import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterdetailComponent } from './waiterdetail.component';

describe('WaiterdetailComponent', () => {
  let component: WaiterdetailComponent;
  let fixture: ComponentFixture<WaiterdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
