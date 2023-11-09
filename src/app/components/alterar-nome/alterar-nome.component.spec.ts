import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarNomeComponent } from './alterar-nome.component';

describe('AlterarNomeComponent', () => {
  let component: AlterarNomeComponent;
  let fixture: ComponentFixture<AlterarNomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarNomeComponent]
    });
    fixture = TestBed.createComponent(AlterarNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
