import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtBlockComponent } from './art-block.component';

describe('ArtBlockComponent', () => {
  let component: ArtBlockComponent;
  let fixture: ComponentFixture<ArtBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
