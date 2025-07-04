import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
    { path: '', component: RemoteEntryComponent },
];

// Re-export orders routes for module federation
export { ordersRoutes } from '../routes/orders.routes';
