import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KombuchaComponent } from './kombucha.component';

describe('KombuchaComponent', () => {
  let component: KombuchaComponent;
  let fixture: ComponentFixture<KombuchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KombuchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KombuchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
