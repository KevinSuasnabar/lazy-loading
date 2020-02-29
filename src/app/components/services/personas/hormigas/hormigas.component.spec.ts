import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HormigasComponent } from './hormigas.component';

describe('HormigasComponent', () => {
  let component: HormigasComponent;
  let fixture: ComponentFixture<HormigasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HormigasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HormigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
