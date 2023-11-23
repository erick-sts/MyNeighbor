import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEsqueciMinhaSenhaComponent } from './form-esqueci-minha-senha.component';

describe('FormEsqueciMinhaSenhaComponent', () => {
  let component: FormEsqueciMinhaSenhaComponent;
  let fixture: ComponentFixture<FormEsqueciMinhaSenhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEsqueciMinhaSenhaComponent]
    });
    fixture = TestBed.createComponent(FormEsqueciMinhaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
