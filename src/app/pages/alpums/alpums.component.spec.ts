import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpumsComponent } from './alpums.component';

describe('AlpumsComponent', () => {
  let component: AlpumsComponent;
  let fixture: ComponentFixture<AlpumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
