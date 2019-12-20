import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationThemeComponent } from './presentation-theme.component';

describe('PresentationThemeComponent', () => {
  let component: PresentationThemeComponent;
  let fixture: ComponentFixture<PresentationThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
