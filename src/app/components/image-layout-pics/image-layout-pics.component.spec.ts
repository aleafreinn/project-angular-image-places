import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLayoutPicsComponent } from './image-layout-pics.component';

describe('ImageLayoutPicsComponent', () => {
  let component: ImageLayoutPicsComponent;
  let fixture: ComponentFixture<ImageLayoutPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLayoutPicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLayoutPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
