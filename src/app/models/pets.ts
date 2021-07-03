import { Deserializable } from "./deserializable";

export class Pet implements Deserializable {
  id: string;
  name: string;
  gender: string;
  age: string;
  neutered: string;
  vaccinated: string;
  size: string;
  description1: string;
//   description2: string;
  image: string;
  cartImage: string;
  petCategory: string;
  price: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }

}

export const PETS: Pet[] = [

    // {
    //     id: 'adopt', name: 'adopt', image: 'assets/img/adopt.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    //     gender: 'male', age: "5 years", neutered: 'yes', vaccinated: 'yes', size: 'medium', price: 300,
    //      petCategory: "Golden Retriever Dane",
    //     description1: "these are gorgeous energetic Golden Retriever puppies. Current on all shots, dewormer and vet checked.These puppies are ready for a new and ever home, we offer at a good rate with health guarantee.",
    // } as Pet,

    {
        id: 'golden-retriever-flore', name: 'FLORE', image: 'assets/img/golden-retriever/puppies/flore.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
        gender: 'Female', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 800,
         petCategory: "Golden Retriever",
        description1: "She is current on all shots, potty trained, and has an excellent pedigree. Will come with toys. We are looking for the perfect homes for her where she will be shown all love and care. Parents are both health tested. We expect nothing less from these little ones.",
    } as Pet,

    {
        id: 'golden-retriever-susan', name: 'SUSAN', image: 'assets/img/golden-retriever/puppies/susan.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
        gender: 'Female', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 800,
         petCategory: "Golden Retriever",
        description1: "Looking for a loving forever home. She enjoy being petted, getting her belly rubbed, and most of all playing games, so don’t wait, reserve her. She is up-to-date on all vaccinations. She will make the perfect best friend and companion! So what are you waiting for?",
    } as Pet,

    {
        id: 'golden-retriever-romeo', name: 'ROMEO', image: 'assets/img/golden-retriever/puppies/romeo.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
        gender: 'Male', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 800,
         petCategory: "Golden Retriever",
        description1: "Romeo believe in love, sharing smiles, hello hugs, and goodnight kisses. He believe in playing fair, taking turns, and holding hands or paws in his case. He believe in making wishes come true, and friendships last. If you believe in all of that too, make him yours. He will not let you down and will always be there when you need him.",
    } as Pet,

    {
        id: 'golden-retriever-randy', name: 'RANDY', image: 'assets/img/golden-retriever/puppies/randy.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
        gender: 'Male', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 800,
         petCategory: "Golden Retriever",
        description1: "Randy is vet checked and up to date on all shots, he goes with 1-year genetic health guarantee so you don't bother about spending on his health. This cutie is UKC registered and love being around other puppies or any playmate. Mostly important, he likes to have his personal toy.",
    } as Pet,

    {
        id: 'golden-retriever-charlie', name: 'CHARLIE', image: 'assets/img/golden-retriever/puppies/charlie.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
        gender: 'Male', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 800,
         petCategory: "Golden Retriever",
        description1: "Charlie is a very special Golden Retriever Puppy with a great personality! He’s super friendly and likes playing around! He is very affectionate and loves cuddling, and be sure you can count on him for your day to day activities.",
    } as Pet,

    // {
    //     id: 'great-dane-magnum', name: 'Magnum', image: 'assets/img/great-dane/puppies/magnum.jpg',   cartImage: 'assets/img/cartImage/lucy.jpg',
    //     gender: 'female', age: "10 Weeks", neutered: 'yes', vaccinated: 'yes', size: 'medium', price: 800,
    //     petCategory: "Great Dane",
    //     description1: "these are gorgeous energetic Great Dane pets. Current on all shots, dewormer and vet checked.These pets are ready for a new and ever home, we offer at a good rate , The best can only be found at Petz community.",
    // } as Pet,

    // {
    //     id: 'great-dane-cheyenne', name: 'Cheyenne', image: 'assets/img/great-dane/puppies/cheyenne.jpg',   cartImage: 'assets/img/cartImage/logan.jpg',
    //     gender: 'Female', age: "10 Weeks", neutered: 'yes', vaccinated: 'yes', size: 'medium', price: 800,
    //     petCategory: "Great Dane",
    //     description1: "these are gorgeous energetic Great Dane pets. Current on all shots, dewormer and vet checked.These pets are ready for a new and ever home, we offer at a good rate , The best can only be found at Petz community.",
    // } as Pet,

    // {
    //     id: 'great-dane-asna', name: 'Asna', image: 'assets/img/great-dane/puppies/asna.jpg',   cartImage: 'assets/img/cartImage/jasper.jpg',
    //     gender: 'Female', age: "10 Weeks", neutered: 'yes', vaccinated: 'yes', size: 'medium', price: 800,
    //     petCategory: "Great Dane",
    //     description1: "these are gorgeous energetic Great Dane pets. Current on all shots, dewormer and vet checked.These pets are ready for a new and ever home, we offer at a good rate , The best can only be found at Petz community.",
    // } as Pet,

    // {
    //     id: 'great-dane-yukon', name: 'Yukon', image: 'assets/img/great-dane/puppies/yukon.jpg',   cartImage: 'assets/img/cartImage/bloush.jpg',
    //     gender: 'Male', age: "10 Weeks", neutered: 'yes', vaccinated: 'yes', size: 'medium', price: 700,
    //     petCategory: "Great Dane",
    //     description1: "these are gorgeous energetic Great Dane pets. Current on all shots, dewormer and vet checked.These pets are ready for a new and ever home, we offer at a good rate , The best can only be found at Petz community.",
    // } as Pet,

    // {
    //     id: 'great-dane-scooby-doo', name: 'Scooby-Doo', image: 'assets/img/great-dane/puppies/scooby-doo.jpg',   cartImage: 'assets/img/cartImage/adrianne.jpg',
    //     gender: 'Male', age: "10 Weeks", neutered: 'yes', vaccinated: 'yes', size: 'medium', price: 700,
    //     petCategory: "Great Dane",
    //     description1: "these are gorgeous energetic Great Dane pets. Current on all shots, dewormer and vet checked.These pets are ready for a new and ever home, we offer at a good rate , The best can only be found at Petz community.",
    // } as Pet,

    // {
    //     id: 'great-dane-mellie', name: 'Millie', image: 'assets/img/great-dane/puppies/millie.jpg',   cartImage: 'assets/img/cartImage/yasmine.jpg',
    //     gender: 'Male', age: "10 Weeks", neutered: 'yes', vaccinated: 'yes', size: 'medium', price: 700,
    //     petCategory: "Great Dane",
    //     description1: "these are gorgeous energetic Great Dane pets. Current on all shots, dewormer and vet checked.These pets are ready for a new and ever home, we offer at a good rate , The best can only be found at Petz community.",
    // } as Pet,

];
  