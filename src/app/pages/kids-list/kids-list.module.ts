import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsListPageRoutingModule } from './kids-list-routing.module';

import { KidsListPage } from './kids-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidsListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [KidsListPage]
})
export class KidsListPageModule {}
