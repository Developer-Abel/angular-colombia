import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// rutas
import { CotizacionComponent } from './cotizacion/cotizacion.component';

const appRoutes = [
  { path: 'cotizacion', component: CotizacionComponent,  pathMatch: 'full'},
];
export const routing = RouterModule.forRoot(appRoutes);