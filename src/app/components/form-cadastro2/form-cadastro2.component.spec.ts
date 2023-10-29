import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastro2Component } from './form-cadastro2.component';

describe('FormCadastro2Component', () => {
  let component: FormCadastro2Component;
  let fixture: ComponentFixture<FormCadastro2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCadastro2Component]
    });
    fixture = TestBed.createComponent(FormCadastro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
