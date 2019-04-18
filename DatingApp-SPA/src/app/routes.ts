import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemmberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemmberListResolver } from './_resolvers/member-list.resolver';


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
            {path: 'messages' , component: MessagesComponent},
            {path: 'lists' , component: ListsComponent},
        ]
    },

    {path: '**' , redirectTo: '' , pathMatch: 'full'}
];



