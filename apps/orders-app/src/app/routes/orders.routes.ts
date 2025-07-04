import { Route } from '@angular/router';
import { OrderListComponent } from '../components/order-list.component';

export const ordersRoutes: Route[] = [
    {
        path: '',
        component: OrderListComponent,
    },
];
