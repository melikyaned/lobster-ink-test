import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {TreeNode} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data$: Observable<TreeNode<string>[]> = of(
    [
      {
        label: 'Wanna play?',
        selectable: false,
        expanded: true,
        children: [
          {
            label: 'Yes',
            selectable: true,
            children: [
              {
                label: 'Are you good or evil?',
                expanded: true,
                selectable: false,
                children: [
                  {
                    label: 'Good',
                    selectable: true,
                    children: [
                      {
                        label: 'Would you like to live in woods or dungeons?',
                        expanded: true,
                        selectable: false,
                        children: [
                          {
                            label: 'Woods',
                            selectable: true,
                            children: [
                              {
                                label: `You're an elf!`,
                                selectable: false,
                                leaf: true,
                                data: 'The Elves were the first and eldest Children of Ilúvatar, considered the fairest and wisest of the earthly race of Arda.'
                              }
                            ]
                          },
                          {
                            label: 'Dungeons',
                            selectable: true,
                            children: [
                              {
                                label: `You're a dwarf!`,
                                selectable: false,
                                leaf: true,
                                data: 'Dwarves, also known as the Khazâd (in their own tongue), the "Masters of Stone". They are the oldest of the Free Peoples of the World.'
                              }
                            ]
                          }
                        ]
                      },
                    ]
                  },
                  {
                    label: 'Evil',
                    selectable: true,
                    children: [
                      {
                        label: 'Do you like to provoke others?',
                        expanded: true,
                        selectable: false,
                        children: [
                          {
                            label: 'Yes',
                            selectable: true,
                            children: [
                              {
                                label: `You're a troll!`,
                                selectable: false,
                                leaf: true,
                                data: 'Trolls were a very large and monstrous, and for the most part unintelligent, humanoid race inhabiting Middle-earth.'
                              }
                            ]
                          },
                          {
                            label: 'No',
                            selectable: true,
                            children: [
                              {
                                label: `You're an orc!`,
                                selectable: false,
                                leaf: true,
                                data: `Orcs were the primary soldiers of both Dark Lords' armies, and their most common servants.`
                              }
                            ]
                          }
                        ]
                      },
                    ]
                  }
                ]
              },
            ]
          },
          {
            label: 'No',
            selectable: true,
            children: [
              {
                label: 'Sad :(',
                selectable: false
              },
            ]
          }
        ]
      }
    ]
  )

  constructor() { }
}
