import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarTelefoneComponent } from './alterar-telefone.component';

describe('AlterarTelefoneComponent', () => {
  let component: AlterarTelefoneComponent;
  let fixture: ComponentFixture<AlterarTelefoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarTelefoneComponent]
    });
    fixture = TestBed.createComponent(AlterarTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
