import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSudokuPage } from './dr-sudoku-page';

describe('DrSudokuPage', () => {
  let component: DrSudokuPage;
  let fixture: ComponentFixture<DrSudokuPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrSudokuPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DrSudokuPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
