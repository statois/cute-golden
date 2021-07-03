import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ServiceComponent } from './components/service/service.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TeamComponent } from './components/team/team.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PetParentComponent } from './components/pet-parent/pet-parent.component';
import { PetService } from './services/pets.service';
import { CartService } from './services/cart.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ScriptService } from './services/script.service';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { SearchComponent } from './components/search/search.component';
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { SEOService } from './services/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PetsComponent,
    PetComponent,
    ContactComponent,
    TestimonialsComponent,
    TeamComponent,
    CartComponent,
    CheckoutComponent,
    GalleryComponent,
    PetParentComponent,
    PrivacyComponent,
    TermsOfServiceComponent,
    SearchComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    CarouselModule,
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    TransferHttpModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    NgxJsonLdModule,
    BrowserAnimationsModule,
    routing  
  ],
  providers: [
    PetService,
    CartService,
    ApiService,
    ScriptService,
    SEOService,
    TransferHttpService
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
