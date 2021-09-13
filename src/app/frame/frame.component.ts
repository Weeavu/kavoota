import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
})
export class FrameComponent implements OnInit {
  frames = [
    {
      id: 2,
      name: 'Brass Frame',
      image: '../..//assets/frames/frame-brass.jpg',
    },
    {
      id: 3,
      name: 'Fortress Frame',
      image: '../..//assets/frames/frame-fortress.jpg',
    },
    {
      id: 4,
      name: 'Beachside Frame',
      image: '../..//assets/frames/frame-beach.jpg',
    },
    {
      id: 5,
      name: 'Volcanic Frame',
      image: '../..//assets/frames/frame-volcanic.jpg',
    },
    {
      id: 6,
      name: 'Cherry Blossom Frame',
      image: '../..//assets/frames/frame-blossom.jpg',
    },
    {
      id: 7,
      name: 'Spirit Flame Frame',
      image: '../..//assets/frames/frame-spirit.jpg',
    },
    {
      id: 8,
      name: 'Night Crow Frame',
      image: '../..//assets/frames/frame-crow.jpg',
    },
    {
      id: 9,
      name: 'Crystal Mines Frame',
      image: '../..//assets/frames/frame-crystal.jpg',
    },
    {
      id: 10,
      name: 'Submarine Frame',
      image: '../..//assets/frames/frame-submarine.jpg',
    },
    {
      id: 11,
      name: 'Pirate Voyage Frame',
      image: '../..//assets/frames/frame-pirate.jpg',
    },
    {
      id: 12,
      name: 'Kominka Frame',
      image: '../..//assets/frames/frame-kominka.jpg',
    },
    {
      id: 13,
      name: 'Magus Frame',
      image: '../..//assets/frames/frame-magus.jpg',
    },
    {
      id: 14,
      name: 'Magitek Frame',
      image: '../..//assets/frames/frame-magitek.jpg',
    },
    {
      id: 15,
      name: 'Snowlands Frame',
      image: '../..//assets/frames/frame-snowlands.jpg',
    },
    {
      id: 16,
      name: 'Ice Cream Sundae Frame',
      image: '../..//assets/frames/frame-sundae.jpg',
    },
    {
      id: 17,
      name: 'Dragon Hunt Frame',
      image: '../..//assets/frames/frame-dragonhunt.jpg',
    },
    {
      id: 18,
      name: 'Patchwork Frame',
      image: '../..//assets/frames/frame-patchwork.jpg',
    },
    {
      id: 19,
      name: 'Venice Carnival Frame',
      image: '../..//assets/frames/frame-venicecarnival.jpg',
    },
    {
      id: 20,
      name: 'Robotic Frame',
      image: '../..//assets/frames/frame-robotic.jpg',
    },
    {
      id: 21,
      name: 'Frills Frame',
      image: '../..//assets/frames/frame-frills.jpg',
    },
    {
      id: 22,
      name: 'Fuselage Frame',
      image: '../..//assets/frames/frame-fuselage.jpg',
    },
    {
      id: 23,
      name: 'Rozen Frame',
      image: '../..//assets/frames/frame-rozen.jpg',
    },
    {
      id: 24,
      name: 'Smithy Forge Frame',
      image: '../..//assets/frames/frame-smithyforge.jpg',
    },
    {
      id: 25,
      name: 'Watermelon Juice Frame',
      image: '../..//assets/frames/frame-watermelonjuice.jpg',
    },
    {
      id: 26,
      name: 'Faerie Forest Frame',
      image: '../..//assets/frames/frame-faerieforest.jpg',
    },
    {
      id: 27,
      name: 'Autumn View Frame',
      image: '../..//assets/frames/frame-autumnview.jpg',
    },
    {
      id: 28,
      name: 'Edo Furin Frame',
      image: '../..//assets/frames/frame-edofurin.jpg',
    },
    {
      id: 29,
      name: 'Barbecue Frame',
      image: '../..//assets/frames/frame-barbecue.jpg',
    },
    {
      id: 30,
      name: 'Whirlpool Frame',
      image: '../..//assets/frames/frame-whirlpool.jpg',
    },
    {
      id: 31,
      name: 'Bubble Bath Frame',
      image: '../..//assets/frames/frame-bubblebath.jpg',
    },
    {
      id: 32,
      name: 'Spaceship Frame',
      image: '../..//assets/frames/frame-spaceship.jpg',
    },
    {
      id: 33,
      name: 'Wild West Frame',
      image: '../..//assets/frames/frame-wildwest.jpg',
    },
    {
      id: 34,
      name: 'Archery Frame',
      image: '../..//assets/frames/frame-archery.jpg',
    },
    {
      id: 35,
      name: 'Tree Frog Frame',
      image: '../..//assets/frames/frame-treefrog.jpg',
    },
    {
      id: 36,
      name: 'Scimitar Fight Frame',
      image: '../..//assets/frames/frame-scimitarfight.jpg',
    },
    {
      id: 37,
      name: 'Bamboo Stalks Frame',
      image: '../..//assets/frames/frame-bamboostalks.jpg',
    },
    {
      id: 38,
      name: 'Chocolate Orange Frame',
      image: '../..//assets/frames/frame-chocolateorange.jpg',
    },
    {
      id: 39,
      name: 'Tribal Chief Frame',
      image: '../..//assets/frames/frame-tribalchief.jpg',
    },
    {
      id: 40,
      name: 'Abandoned Church Frame',
      image: '../..//assets/frames/frame-abandonedchurch.jpg',
    },
    {
      id: 41,
      name: 'Long Hair Frame',
      image: '../..//assets/frames/frame-longhair.jpg',
    },
    {
      id: 42,
      name: 'Water Element Frame',
      image: '../..//assets/frames/frame-waterelement.jpg',
    },
    {
      id: 43,
      name: 'Carved Stone Frame',
      image: '../..//assets/frames/frame-carvedstone.jpg',
    },
    {
      id: 44,
      name: 'Beauty Frame',
      image: '../..//assets/frames/frame-beauty.jpg',
    },
    {
      id: 45,
      name: 'Carnations Frame',
      image: '../..//assets/frames/frame-carnations.jpg',
    },
    {
      id: 46,
      name: 'Baroque Frame',
      image: '../..//assets/frames/frame-baroque.jpg',
    },
    {
      id: 47,
      name: 'Musical Notes Frame',
      image: '../..//assets/frames/frame-musicalnotes.jpg',
    },
    {
      id: 48,
      name: 'Winners Podium Frame',
      image: '../..//assets/frames/frame-winnerspodium.jpg',
    },
    {
      id: 49,
      name: 'Manticore Frame',
      image: '../..//assets/frames/frame-manticore.jpg',
    },
    {
      id: 50,
      name: 'Tipsy Frame',
      image: '../..//assets/frames/frame-tipsy.jpg',
    },
    {
      id: 51,
      name: 'Nordic Frame',
      image: '../..//assets/frames/frame-nordic.jpg',
    },
    {
      id: 52,
      name: 'Shiba Inu Frame',
      image: '../..//assets/frames/frame-shibainu.jpg',
    },
    {
      id: 53,
      name: 'Toy Mecha Frame',
      image: '../..//assets/frames/frame-toymecha.jpg',
    },
  ];

  cardCode?: string = '';
  constructor() {}

  ngOnInit(): void {}
}
