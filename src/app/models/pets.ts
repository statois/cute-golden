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
    id: 'golden-retriever-flore', name: 'FLORE', image: 'assets/img/golden-retriever/puppies/backup/flore.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Female', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 800,
    petCategory: "Golden Retriever",
    description1: "She is current on all shots, potty trained, and has an excellent pedigree. Will come with toys. We are looking for the perfect homes for her where she will be shown all love and care. Parents are both health tested. We expect nothing less from these little ones.",
  } as Pet,

  {
    id: 'golden-retriever-susan', name: 'SUSAN', image: 'assets/img/golden-retriever/puppies/backup/susan.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Female', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 800,
    petCategory: "Golden Retriever",
    description1: "Looking for a loving forever home. She enjoy being petted, getting her belly rubbed, and most of all playing games, so don’t wait, reserve her. She is up-to-date on all vaccinations. She will make the perfect best friend and companion! So what are you waiting for?",
  } as Pet,

  {
    id: 'golden-retriever-romeo', name: 'ROMEO', image: 'assets/img/golden-retriever/puppies/backup/romeo.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Male', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 800,
    petCategory: "Golden Retriever",
    description1: "Romeo believe in love, sharing smiles, hello hugs, and goodnight kisses. He believe in playing fair, taking turns, and holding hands or paws in his case. He believe in making wishes come true, and friendships last. If you believe in all of that too, make him yours. He will not let you down and will always be there when you need him.",
  } as Pet,

  {
    id: 'golden-retriever-lucy', name: 'LUCY', image: 'assets/img/golden-retriever/puppies/backup/Lucy.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Female', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 845,
    petCategory: "Golden Retriever",
    description1: "Lucy is a very sweet baby girl who loves everyone she meets. She is a very playful little girl, but she also likes to relax and be held. She is sure to steal your heart with her great personality and good looks. She comes home to you up-to-date on her vaccinations. Lucy is going to make a great little companion as she can’t wait to be adopted! Don’t miss her out!",
  } as Pet,

  {
    id: 'golden-retriever-harna', name: 'HARNA', image: 'assets/img/golden-retriever/puppies/backup/Harna.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Female', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 845,
    petCategory: "Golden Retriever",
    description1: "Harna is a unique pretty little girl of her own kind, she likes attention as she always gives attention to those she loves. Harna is that kind of puppy that attaches herself to some specific persons though there might be others in the house. In fact, if she doesn't like someone, you surely gonna notice it. She comes home to you up-to-date on her vaccinations.",
  } as Pet,

  {
      id: 'golden-retriever-sarah', name: 'SARAH', image: 'assets/img/golden-retriever/puppies/backup/sarah.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
      gender: 'Female', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 845,
       petCategory: "Golden Retriever",
      description1: "Sarah is a calm and clean female pitbull pup that loves cute outing like going to the restaurant or attractive and classic places. But walking is not that much of her things when going out. If you are looking for a princess you can take along for hangouts or dates, and even work then Sarah is for you. Being a female, she has a strong attraction for Women as compared to Men.",
  } as Pet,

  // {
  //     id: 'golden-retriever-randy', name: 'RANDY', image: 'assets/img/golden-retriever/puppies/backup/randy.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
  //     gender: 'Male', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 800,
  //      petCategory: "Golden Retriever",
  //     description1: "Randy is vet checked and up to date on all shots, he goes with 1-year genetic health guarantee so you don't bother about spending on his health. This cutie is UKC registered and love being around other puppies or any playmate. Mostly important, he likes to have his personal toy.",
  // } as Pet,

  {
    id: 'golden-retriever-mark', name: 'MARK', image: 'assets/img/golden-retriever/puppies/backup/mark-1.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Male', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 800,
    petCategory: "Golden Retriever",
    description1: "Mark is vet checked and up to date on all shots, he goes with 1-year genetic health guarantee so you don't bother about spending on his health. This cutie is UKC registered and love being around other puppies or any playmate. Mostly important, he likes to have his personal toy.",
  } as Pet,

  // {
  //   id: 'golden-retriever-charlie', name: 'CHARLIE', image: 'assets/img/golden-retriever/puppies/backup/charlie.jpeg', cartImage: 'assets/img/cartImage/adopt.jpg',
  //   gender: 'Male', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 800,
  //   petCategory: "Golden Retriever",
  //   description1: "Charlie is a very special Golden Retriever Puppy with a great personality! He’s super friendly and likes playing around! He is very affectionate and loves cuddling, and be sure you can count on him for your day to day activities.",
  // } as Pet,

  {
    id: 'golden-retriever-marley', name: 'MARLEY', image: 'assets/img/golden-retriever/puppies/backup/marley.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Male', age: "8 weeks", vaccinated: 'yes', size: 'small', price: 900,
    petCategory: "Golden Retriever",
    description1: "Marley! He is a true prince charming. He is just as handsome and lovable as they come. He is always up for anything. He will be the first to run in the yard for a good game of catch or to lie on the couch for a good nap. He is just an all-around great pup! Marley will be sure to come home to you up-to-date on his vaccinations and vet checked. Don’t let this all around star pass you by. He will be sure to make that perfect, playful, loving addition that you and your family have been searching for.",
  } as Pet,

  {
    id: 'golden-retriever-roman', name: 'ROMAN', image: 'assets/img/golden-retriever/puppies/backup/roman.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Male', age: "9 weeks", vaccinated: 'yes', size: 'small', price: 845,
    petCategory: "Golden Retriever",
    description1: "A little calm, loving, and obedient prince that can make a good companion wherever you go. He is attachable, loves outing, and would like to seat on the front seat while going by car. He's current on all shots and would say he has a strong health condition.",
  } as Pet,

  {
    id: 'golden-retriever-prada', name: 'PRADA', image: 'assets/img/golden-retriever/puppies/backup/Prada-1.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Female', age: "15 weeks", vaccinated: 'yes', size: 'big', price: 600,
    petCategory: "Golden Retriever",
    description1: "This is an adult Golden Retriever female parent for some litter puppies on our premises.",
  } as Pet,

  {
    id: 'golden-retriever-luke', name: 'LUKE', image: 'assets/img/golden-retriever/puppies/backup/Luke.jpg', cartImage: 'assets/img/cartImage/adopt.jpg',
    gender: 'Male', age: "16 weeks", vaccinated: 'yes', size: 'big', price: 600,
    petCategory: "Golden Retriever",
    description1: "This is an adult Golden Retriever male parent for some litter puppies on our premises.",
  } as Pet,

];
