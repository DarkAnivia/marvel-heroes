import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBasicInfoComponent } from './hero-basic-info.component';

describe('HeroBasicInfoComponent', () => {
  let component: HeroBasicInfoComponent;
  let fixture: ComponentFixture<HeroBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
