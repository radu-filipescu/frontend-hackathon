import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalLeaderboardPageComponent } from './internal-leaderboard-page.component';

describe('InternalLeaderboardPageComponent', () => {
  let component: InternalLeaderboardPageComponent;
  let fixture: ComponentFixture<InternalLeaderboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalLeaderboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalLeaderboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
