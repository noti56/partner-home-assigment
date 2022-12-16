import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export type appRoute = 'auth' | 'packages';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'packages',
    loadChildren: () =>
      import('./packages/packages.module').then((m) => m.PackagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  }
]; */
