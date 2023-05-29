import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrSudokuPageComponent } from './dr-sudoku-page.component';

describe('DrSudokuPageComponent', () => {
  let component: DrSudokuPageComponent;
  let fixture: ComponentFixture<DrSudokuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrSudokuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrSudokuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
