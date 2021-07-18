import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSideComponent } from './light-side.component';

describe('LightSideComponent', () => {
  let component: LightSideComponent;
  let fixture: ComponentFixture<LightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
