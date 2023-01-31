import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttunementsComponent } from './attunements.component';

describe('AttunementsComponent', () => {
  let component: AttunementsComponent;
  let fixture: ComponentFixture<AttunementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttunementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttunementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
