import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaContaComponent } from './tela-conta.component';

describe('TelaContaComponent', () => {
  let component: TelaContaComponent;
  let fixture: ComponentFixture<TelaContaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaContaComponent]
    });
    fixture = TestBed.createComponent(TelaContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
