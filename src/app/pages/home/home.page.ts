import { Component, OnInit } from '@angular/core';

interface Components{
  icon:string;
  name: string;
  redirectTo:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  components:Components[] = [
    {
      icon:'',
      name:'Lista de niños',
      redirectTo:'/kids-list'
    },
    {
      icon:'',
      name:'Gestión de niños',
      redirectTo:'/'
    },
    {
      icon:'',
      name:'Gestión de usuarios',
      redirectTo:'/'
    },
    {
      icon:'',
      name:'Gestión de grupos',
      redirectTo:'/'
    },
    {
      icon:'',
      name:'Gestión de asignaciones de niños a grupos',
      redirectTo:'/'
    },{
      icon:'',
      name:'Gestión de organizaciones subsidiarias',
      redirectTo:'/'
    },{
      icon:'',
      name:'Gestión de asignaciones de niños a organizaciones subsidiarias',
      redirectTo:'/'
    },{
      icon:'',
      name:'Gestión de estrategias de acción',
      redirectTo:'/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
