import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boton02Component } from './boton02.component';

describe('Boton02Component', () => {
  let component: Boton02Component;
  let fixture: ComponentFixture<Boton02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boton02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boton02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
