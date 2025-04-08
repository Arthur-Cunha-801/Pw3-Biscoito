import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthurComponent } from './arthur.component';

describe('ArthurComponent', () => {
  let component: ArthurComponent;
  let fixture: ComponentFixture<ArthurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArthurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArthurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
