import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastro3Component } from './form-cadastro3.component';

describe('FormCadastro3Component', () => {
  let component: FormCadastro3Component;
  let fixture: ComponentFixture<FormCadastro3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCadastro3Component]
    });
    fixture = TestBed.createComponent(FormCadastro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
