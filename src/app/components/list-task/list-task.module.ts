import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task.component';



@NgModule({
  declarations: [
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports : [ListTaskComponent]
})
export class ListTaskModule { }
