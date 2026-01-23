import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewStanfordSleepinessDataPage } from './view-stanford-sleepiness-data.page';

describe('ViewStanfordSleepinessDataPage', () => {
  let component: ViewStanfordSleepinessDataPage;
  let fixture: ComponentFixture<ViewStanfordSleepinessDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStanfordSleepinessDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
