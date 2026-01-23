import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StanfordSleepinessDataPage } from './stanford-sleepiness-data.page';

describe('StanfordSleepinessDataPage', () => {
  let component: StanfordSleepinessDataPage;
  let fixture: ComponentFixture<StanfordSleepinessDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StanfordSleepinessDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
