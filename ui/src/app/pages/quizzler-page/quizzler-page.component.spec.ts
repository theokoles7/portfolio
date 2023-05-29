import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzlerPageComponent } from './quizzler-page.component';

describe('QuizzlerPageComponent', () => {
  let component: QuizzlerPageComponent;
  let fixture: ComponentFixture<QuizzlerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzlerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzlerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
