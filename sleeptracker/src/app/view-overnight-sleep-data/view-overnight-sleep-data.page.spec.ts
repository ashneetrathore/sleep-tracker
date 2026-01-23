import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOvernightSleepDataPage } from './view-overnight-sleep-data.page';

describe('ViewOvernightSleepDataPage', () => {
  let component: ViewOvernightSleepDataPage;
  let fixture: ComponentFixture<ViewOvernightSleepDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOvernightSleepDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
