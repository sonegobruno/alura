import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButonGroupComponent } from './yes-no-buton-group.component';
import { KeyboardManagerModule } from '../../directives/keyboard-manager/keyboard-manager.module';



@NgModule({
  declarations: [YesNoButonGroupComponent],
  imports: [
    CommonModule,
    KeyboardManagerModule
  ],
  exports: [YesNoButonGroupComponent]
})
export class YesNoButonGroupModule { }
