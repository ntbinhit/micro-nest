import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontOrderButtonComponent } from './order-button-wrapper.component';

@Component({
    selector: 'mfe-storefront-dashboard-header',
    standalone: true,
    imports: [ CommonModule, StorefrontOrderButtonComponent ],
    templateUrl: './header.component.html',
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeaderComponent {
}
