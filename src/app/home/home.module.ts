import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TerminalComponent } from '../terminal/terminal.component';
import {HeaderComponent} from "../header/header.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FooterComponent} from "../footer/footer.component";


@NgModule({
    declarations: [
        HomeComponent,
        TerminalComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
