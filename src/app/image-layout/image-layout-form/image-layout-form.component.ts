import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IimageList } from '../image-layout-interfaces';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'aip-image-layout-form',
  templateUrl: './image-layout-form.component.html',
  styleUrls: ['./image-layout-form.component.scss'],
})
export class ImageLayoutFormComponent implements OnInit {
  @Output() itemToSubmit = new EventEmitter<IimageList>();

  newImageItem: FormGroup = new FormGroup({
    imageURL: new FormControl('', Validators.required),
    label: new FormControl('', Validators.required),
    budget: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const savedItem: IimageList = {
      id: uuid(),
      imageURL: this.newImageItem.get('imageURL')?.value,
      label: this.newImageItem.get('label')?.value,
      budget: this.newImageItem.get('budget')?.value,
    };

    this.itemToSubmit.emit(savedItem);
    console.log('item saved!', savedItem);
    this.newImageItem.reset();
  }
}
