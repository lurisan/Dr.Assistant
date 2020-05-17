import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup-routing.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    SignupRoutingModule
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
