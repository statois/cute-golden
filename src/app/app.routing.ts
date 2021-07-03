import{RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PetsComponent } from './components/pets/pets.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { PetComponent } from './components/pet/pet.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PetParentComponent } from './components/pet-parent/pet-parent.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Best Bulldogs Home'}},
    {path: 'about', component: AboutComponent, data: {title: 'About'}},
    {path: 'service', component: ServiceComponent, data: {title: 'Services'}},
    {path: 'testimonials', component: TestimonialsComponent, data: {title: 'Testimonials'}},
    {path: 'pets', component: PetsComponent, data: {title: 'Pets'}},
    {path: 'gallery', component: GalleryComponent, data: {title: 'Gallery'}},
    {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
    {path: 'team', component: TeamComponent, data: {title: 'Team'}},
    {path: 'cart', component: CartComponent, data: {title: 'Cart'}},
    {path: 'checkout/:id', component: CheckoutComponent, data: {title: 'Checkout'}},
    {path: 'privacy', component: PrivacyComponent, data: {title: 'Privacy Policy'}},
    {path: 'termsOfService', component: TermsOfServiceComponent, data: {title: 'Term of Service'}},
    {path: 'search', component: SearchComponent, data: {title: 'Pets'}},

    {
        path: 'pet/:id', component: PetParentComponent,

        children: [
            { path: 'child/:id', component: PetComponent }
        ]
    },
];

export const routing = RouterModule.forRoot(routes);