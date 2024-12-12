import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent implements OnInit {
  @Input() item : MenuItem | null = null;

  @Output() onClick : EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {}
}
