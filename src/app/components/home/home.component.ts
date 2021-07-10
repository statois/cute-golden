import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pets';
import { PetService } from '../../services/pets.service';
import { Contact } from '../../models/api/contact';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2'
import { SEOService } from '../../services/seo.service';
import { MetaTag } from '../../models/metaTag';
import { PropertyTag } from '../../models/api/propertyTag.model';
import { Seo } from '../../models/api/seo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pets: Pet[] = new Array();
  contact: Contact = new Contact();
  isLoading = false;
  seo = new Seo()
  tags = new Array()
  date: Date
  properties = new Array()
  schema;
  navigationSchema;
  buttonMsg = "Send Message";
  private pathToAssets: string = "../../assets/";


  constructor(
    private productService: PetService,
    private apiService: ApiService,
    private seoService: SEOService) {
    var now = new Date(), y = now.getFullYear(), m = now.getMonth();
    this.date = new Date(y, m + 1, 0);
    console.log(this.date.toUTCString())
  }

  ngOnInit() {
    this.pets = this.productService.findAll();
    this.seo.title = "Cute Golden Retrievers | Golden Retriever puppies available online."
    this.seo.description = "healthy and lovely Golden Retriever puppies online at very affordable prices and enjoy veterinary services to keep your pets healthy always."
    this.tags = [
      {
        name: "twitter:title", content: "Cute Golden Retrievers | Golden Retriever puppies available online."
      } as MetaTag,
      {
        name: "twitter:description", content: "Shelter healthy and lovely golden retriver puppies online at very affordable prices and enjoy veterinary services to keep your pets healthy always."
      } as MetaTag,
      {
        name: "twitter:image", content: "https://www.cutegoldretrievers.com/assets/img/golden-retriever/image-7.jpg"
      } as MetaTag,
      {
        name: "twitter:label1", content: "Cute Golden Retriever Puppies"
      } as MetaTag,
      {
        name: "twitter:data1", content: "Free shipping available"
      } as MetaTag,
      {
        name: "twitter:card", content: "Lovely Golden Retriever"
      } as MetaTag,
      {
        name: "twitter:creator", content: "@cutegoldenretriever"
      } as MetaTag,
    ]

    this.properties = [
      {
        property: "og:title", content: "Cute Golden Retrievers | Golden Retriever puppies available online."
      } as PropertyTag,
      {
        property: "og:locale", content: "en_US"
      } as PropertyTag,
      {
        property: "og:image", content: "https://www.cutegoldretrievers.com/assets/img/golden-retriever/image-7.jpg"
      } as PropertyTag,
      {
        property: "og:description", content: "Shelter healthy and lovely golden retriever puppies online at very affordable prices and enjoy veterinary services to keep your pets healthy always."
      } as PropertyTag,
      {
        property: "og:site_name", content: "Cute Golden Retriever"
      } as PropertyTag,
      {
        property: "og:type", content: "website"
      } as PropertyTag,
    ]

    this.seo.propertyTags = this.properties
    this.seo.metaTags = this.tags
    this.seoService.addTags(this.seo)
    this.schema = {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": "Golden Retriever Puppies",
      "url": "https://www.cutegoldretrievers.com",
      "sameAs": ["https://instagram.com/cutegoldretrievers"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.cutegoldretrievers.com/search/{search_term}",
        "query-input": "required name=search_term"
      }
    }

    this.navigationSchema = {
      "@context": "http://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Available Puppies",
          "description": "Shelter healthy and lovely golden retriever puppies online at little or no cost, and enjoy veterinary services to keep your pets healthy always.",
          "url": "https://www.cutegoldretrievers.com/pets"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "About",
          "description": "Cute Golden Retrievers help responsible Golden Retriever breeders place their pets with caring individuals and families across the U.S. But, more than just a service, the House is a community of dog lovers whose mission is to make lives better by placing healthy golden retriever pets into happy homes.",
          "url": "https://www.cutegoldretrievers.com/about"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Reviews",
          "description": "What our happy customers say about our healthy and loveable puppies. It is important to note that some of our pets where abandonned and neglected along the street, and we always make sure to look for such pets so as to treat and feed them in order to be ready and healthy for a new home.",
          "url": "https://www.cutegoldretrievers.com/testimonial"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Contact",
          "description": "We believe pets are part of our everyday lifes and part of our families. They provide us with companionship but also with emotional support, reduce our stress level, sense of loneliness and help us to increase our social activities and add to a child's self-esteem and positive emotional development. Your worries about pets are our concern.",
          "url": "https://www.cutegoldretrievers.com/contact"
        }
      ]
    }
  }

  submit() {
    this.buttonMsg = "Loading..."
    this.apiService.contact(this.contact)
      .subscribe((data: any) => {
        this.isLoading = true;
        Swal({
          title: 'Thanks!',
          text: 'Thank you! Your message has been received. We will contact you as soon as possible',
          type: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#c37c5d'
        })
        this.contact = new Contact();
        this.isLoading = false;
        this.buttonMsg = "Send Message";
      },
        (err: HttpErrorResponse) => {
          this.isLoading = false;
          Swal({
            title: 'Error!',
            text: 'Unable to send message. Make sure you are connected to the internet',
            type: 'warning',
            confirmButtonText: 'Ok got it!',
            confirmButtonColor: '#c37c5d'
          })
          this.buttonMsg = "Send Message";
        });

  }

  printPrice(price : number)
  {
    var price_parts = price.toString().split(".");
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return price_parts.join(".");
  }
}
