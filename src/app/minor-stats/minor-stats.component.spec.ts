import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorStatsComponent } from './minor-stats.component';

describe('MinorStatsComponent', () => {
  let component: MinorStatsComponent;
  let fixture: ComponentFixture<MinorStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
