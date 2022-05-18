import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSudokuComponent } from './dr-sudoku.component';

describe('DrSudokuComponent', () => {
  let component: DrSudokuComponent;
  let fixture: ComponentFixture<DrSudokuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSudokuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrSudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
