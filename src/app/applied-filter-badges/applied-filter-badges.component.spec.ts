import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedFilterBadgesComponent } from './applied-filter-badges.component';

describe('AppliedFilterBadgesComponent', () => {
  let component: AppliedFilterBadgesComponent;
  let fixture: ComponentFixture<AppliedFilterBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppliedFilterBadgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedFilterBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
