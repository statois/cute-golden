import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Seo } from '../models/api/seo.model';

@Injectable({
   providedIn: 'root'
})
export class SEOService { 
   constructor(private meta: Meta, private title: Title) {
   }

   addTags(seo: Seo) {
       this.title.setTitle(seo.title);
       this.meta.updateTag({name: 'description', content: seo.description})

       //update all metaTags
       seo.metaTags.forEach(value => this.meta.addTag({name: value.name, content: value.content}))

       //update all Open graph prperties
       seo.propertyTags.forEach(value => this.meta.addTag({property: value.property, content: value.content}))
   } 
        
   updateTags(seo: Seo) {
    this.title.setTitle(seo.title);
    this.meta.updateTag({name: 'description', content: seo.description})

    //update all metaTags
    seo.metaTags.forEach(value => this.meta.updateTag({name: value.name, content: value.content}))

    //update all Open graph prperties
    seo.propertyTags.forEach(value => this.meta.updateTag({property: value.property, content: value.content}))  
    }            
}