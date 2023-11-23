import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarEnderecoComponent } from './alterar-endereco.component';

describe('AlterarEnderecoComponent', () => {
  let component: AlterarEnderecoComponent;
  let fixture: ComponentFixture<AlterarEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarEnderecoComponent]
    });
    fixture = TestBed.createComponent(AlterarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
