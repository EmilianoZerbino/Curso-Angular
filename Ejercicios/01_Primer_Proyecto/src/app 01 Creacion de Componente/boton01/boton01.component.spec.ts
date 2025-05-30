import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boton01Component } from './boton01.component';

describe('Boton01Component', () => {
  let component: Boton01Component;
  let fixture: ComponentFixture<Boton01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boton01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boton01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
