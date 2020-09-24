import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EquipmentsComponent} from './equipments/equipments.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'equipments', component: EquipmentsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
