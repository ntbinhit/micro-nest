import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

const CART_KEY = 'cartItems';

@Component({
    selector: 'mfe-order-button',
    standalone: true,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
        <a
            class="p-2 mx-1 position-relative"
            (click)="navigate('/pages/orders')"
            style="cursor: pointer;"
        >
            <svg width="24" height="24">
                <use href="#shopping-bag"></use>
            </svg>
            <span 
                *ngIf="count > 0" 
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
            >
                {{count}}
            </span>
        </a>
    `,
    styles: [`
        .position-relative {
            position: relative;
        }
        
        .position-absolute {
            position: absolute;
        }
        
        .top-0 {
            top: 0;
        }
        
        .start-100 {
            left: 100%;
        }
        
        .translate-middle {
            transform: translate(-50%, -50%);
        }
        
        .badge {
            background-color: #0d6efd !important;
        }
        
        .rounded-pill {
            border-radius: 50rem;
        }
        
        .bg-primary {
            background-color: #0d6efd !important;
        }
        
        .p-2 {
            padding: 0.5rem;
        }
        
        .mx-1 {
            margin-left: 0.25rem;
            margin-right: 0.25rem;
        }
    `]
})
export class OrderButtonComponent implements OnInit, OnDestroy {
    count = 0;
    private eventHandler?: (e: any) => void;

    constructor(private router: Router) {}

    ngOnInit(): void {
        // Load initial count from localStorage
        const stored = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
        this.count = stored.length;

        // Listen for cart:add events
        this.eventHandler = (e: any) => {
            const items = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
            items.push(e.detail);
            localStorage.setItem(CART_KEY, JSON.stringify(items));
            this.count = items.length;
        };

        window.addEventListener('cart:add', this.eventHandler);
    }

    ngOnDestroy(): void {
        if (this.eventHandler) {
            window.removeEventListener('cart:add', this.eventHandler);
        }
    }

    navigate(path: string): void {
        console.log('Navigating to:', path);
        // For now, just log the navigation since we need to set up routing
        // this.router.navigate([path]);
    }
}
