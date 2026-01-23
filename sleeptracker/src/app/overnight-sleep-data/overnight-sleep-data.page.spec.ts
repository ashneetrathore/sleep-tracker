import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OvernightSleepDataPage } from './overnight-sleep-data.page';

describe('OvernightSleepDataPage', () => {
  let component: OvernightSleepDataPage;
  let fixture: ComponentFixture<OvernightSleepDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OvernightSleepDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
