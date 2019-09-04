import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, FilterPipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
