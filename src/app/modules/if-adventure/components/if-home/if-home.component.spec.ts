import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfHomeComponent } from './if-home.component';

describe('IfHomeComponent', () => {
  let component: IfHomeComponent;
  let fixture: ComponentFixture<IfHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
