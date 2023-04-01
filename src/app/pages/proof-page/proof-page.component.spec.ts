import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofPageComponent } from './proof-page.component';

describe('ProofPageComponent', () => {
  let component: ProofPageComponent;
  let fixture: ComponentFixture<ProofPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
