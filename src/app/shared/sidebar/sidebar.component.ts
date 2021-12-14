import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [ `li { cursor: pointer; }` 
  ] // Cambia el icono del cursor para indicar que se puede hacer click en los li de SideBarComponente SOLO
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
