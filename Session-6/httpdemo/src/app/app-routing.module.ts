import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:"users",component:UserlistComponent},
  {path:"userDetail/:id",component:UserdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
