import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateruleComponent } from './createrule.component';

describe('CreateruleComponent', () => {
  let component: CreateruleComponent;
  let fixture: ComponentFixture<CreateruleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateruleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
