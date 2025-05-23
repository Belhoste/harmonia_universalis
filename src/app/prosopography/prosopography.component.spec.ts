import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsopographyComponent } from './prosopography.component';

describe('ProsopographyComponent', () => {
  let component: ProsopographyComponent;
  let fixture: ComponentFixture<ProsopographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsopographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsopographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
