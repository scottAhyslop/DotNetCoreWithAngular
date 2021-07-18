import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetrayalComponent } from './betrayal.component';

describe('BetrayalComponent', () => {
  let component: BetrayalComponent;
  let fixture: ComponentFixture<BetrayalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetrayalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetrayalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
