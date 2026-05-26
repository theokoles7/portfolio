import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavButton } from './side-nav-button';

describe('SideNavButton', () => {
  let component: SideNavButton;
  let fixture: ComponentFixture<SideNavButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SideNavButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
