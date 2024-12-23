import { Component, OnInit } from '@angular/core';
import dialogueData from '../../../../../../assets/data/website_demo.cutscene.json';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dialogue-integration',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './dialogue-integration.component.html',
  styleUrl: './dialogue-integration.component.scss'
})
export class DialogueIntegrationComponent implements OnInit {
  dialogue: any;

  constructor() {
    this.dialogue = JSON.parse(JSON.stringify(dialogueData));
  }

  currentDialogue = '';
  currentNode : any;
  currentOptions : any;
  bools = {} as any;

  ngOnInit() {
    this.selectNodeById(this.dialogue.root);
  }

  selectNodeById(id: string) {
    this.currentNode = this.dialogue.nodes[id];
    this.currentDialogue = this.getTextFromNode(this.currentNode);
    this.currentOptions = this.currentNode.options;

    for(let bool of this.currentNode.bools) {
      Object.assign(this.bools, bool);
    }
  }

  getTextFromNode(node: any) {
    let selectedTextNode = {} as any;
    for(let textSection of node.texts) {
      let validOption = true;
      for(let textSectionBool of textSection.bools) {
        for(let key in textSectionBool) {
          if(this.bools[key] !== textSectionBool[key]) {
            validOption = false;
          }
        }
      }
      if(validOption) {
        selectedTextNode = textSection;
      }
    }
    

    return selectedTextNode.texts.map((text: any) => `${text.text}`).join('\n');
  }
}
