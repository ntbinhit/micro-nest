import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from '../components/order-list.component';

@Component({
    standalone: true,
    imports: [CommonModule, OrderListComponent],
    selector: 'mfe-order-entry',
    template: `<mfe-order-list></mfe-order-list>`,
})
export class RemoteEntryComponent {}
