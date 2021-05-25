import { UserConfig } from './services/base.service';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class SymxchangeModule {
  static forRoot(config: UserConfig): ModuleWithProviders<SymxchangeModule> {
    return {
      ngModule: SymxchangeModule,
      providers: [{ provide: UserConfig, useValue: config }]
    };
  }
}
