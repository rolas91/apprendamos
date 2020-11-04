import { Component, OnInit } from '@angular/core';

interface Kids{
  name:string,
  description:string
}

@Component({
  selector: 'app-kids-list',
  templateUrl: './kids-list.page.html',
  styleUrls: ['./kids-list.page.scss'],
})
export class KidsListPage implements OnInit {

  childrens:Kids[] = [
    {
      name:'Andrea Arcia Arguello',
      description:'48 Meses ASQ-3'
    },
    {
      name:'Fernanda Baltodano Medina',
      description:'48 Meses ASQ-3'
    },
    {
      name:'Katerin Espinoza Garcia',
      description:'48 Meses ASQ-3'
    },
    {
      name:'Grissel Gomez Baltodano',
      description:'48 Meses ASQ-3'
    },
    {
      name:'Jose Gomez Baltodano',
      description:'48 Meses ASQ-3'
    },
    {
      name:'Jefrey Corea Baltodano',
      description:'48 Meses ASQ-3'
    },
    {
      name:'Ninoska Baltodano Boniche',
      description:'48 Meses ASQ-3'
    },
    {
      name:'Thomas Sanchez Baltodano',
      description:'48 Meses ASQ-3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
