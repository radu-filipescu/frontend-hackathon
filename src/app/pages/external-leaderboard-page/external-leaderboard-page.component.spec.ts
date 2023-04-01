import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLeaderboardPageComponent } from './external-leaderboard-page.component';

describe('ExternalLeaderboardPageComponent', () => {
  let component: ExternalLeaderboardPageComponent;
  let fixture: ComponentFixture<ExternalLeaderboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalLeaderboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLeaderboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
