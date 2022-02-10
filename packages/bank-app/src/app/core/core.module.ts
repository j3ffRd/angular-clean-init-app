import { NgModule } from '@angular/core';
import { UseCase, useCaseFactory } from "@bank-app/core";

@NgModule({
  imports: [],
  exports: [],
  providers: [
    {
      provide: UseCase, useFactory: useCaseFactory, deps: []
    }
  ],
})
export class CoreModule { }
