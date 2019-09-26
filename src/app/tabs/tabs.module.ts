// Esta seccion es la biblioteca de mi proyecto

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Agregamos la libreria a usar en tab1
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../../environments/environment';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
