import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemmberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemmberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemmberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';


export const appRoutes: Routes = [
    {path: '' , component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members' , component: MemberListComponent
              , resolve: {users: MemmberListResolver }},
            {path: 'members/:id' , component: MemberDetailComponent
              , resolve: {user: MemmberDetailResolver}},
            {path: 'member/edit' , component: MemberEditComponent,
             resolve: {user: MemmberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            {path: 'messages' , component: MessagesComponent},
            {path: 'lists' , component: ListsComponent, resolve: {users: ListsResolver}},
        ]
    },

    {path: '**' , redirectTo: '' , pathMatch: 'full'}
];



