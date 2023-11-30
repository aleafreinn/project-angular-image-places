import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLayoutFormComponent } from './image-layout-form.component';

describe('ImageLayoutFormComponent', () => {
  let component: ImageLayoutFormComponent;
  let fixture: ComponentFixture<ImageLayoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLayoutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
