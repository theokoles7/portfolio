import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzlerPage } from './quizzler-page';

describe('QuizzlerPage', () => {
  let component: QuizzlerPage;
  let fixture: ComponentFixture<QuizzlerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizzlerPage],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizzlerPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
