import { trigger, transition, style, animate } from '@angular/animations';
import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({opacity: 0, transform: 'translate3d(-300%, 0, 0'}),
        animate('400ms ease-in-out', style({opacity: 1, transform: 'translate3d(0,0,0)'})),
      ]),
      transition(':leave', [
        animate('100ms ease-in-out', style({opacity: 0}))
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('fileUploadInput', {static: false}) inputRef: any;

  selectedSection = 'stats';
  characterSheet = new FormGroup({
    identity: new FormGroup({
      name: new FormControl(),
      species: new FormControl(),
      vocation: new FormControl(),
      pronouns: new FormControl(),
      details: new FormControl(),
    }),
  
    stats: new FormGroup({
      xp: new FormGroup({
        current: new FormControl(),
        next: new FormControl(),
      }),
      level: new FormControl(),
      hitPoints: new FormGroup({
        current: new FormControl(),
        max: new FormControl(),
      }),
      attack: new FormGroup({
        value: new FormControl(),
        weapon: new FormControl(),
        dmg: new FormControl(),
      }),
      armorClass: new FormControl(),
      savingThrow: new FormControl(),
      movement: new FormControl(),
      init: new FormControl(),
    }),
  
    traits: new FormGroup({
      strength: new FormGroup({
        value: new FormControl(),
        firstGroup: new FormControl(),
        secondGroup: new FormControl(),
      }),
      constitution: new FormGroup({
        value: new FormControl(),
        firstGroup: new FormControl(),
        secondGroup: new FormControl(),
      }),
      dexterity: new FormGroup({
        value: new FormControl(),
        firstGroup: new FormControl(),
        secondGroup: new FormControl(),
      }),
      charisma: new FormGroup({
        value: new FormControl(),
        firstGroup: new FormControl(),
        secondGroup: new FormControl(),
      }),
      wisdom: new FormGroup({
        value: new FormControl(),
        firstGroup: new FormControl(),
        secondGroup: new FormControl(),
      }),
      intelligence: new FormGroup({
        value: new FormControl(),
        firstGroup: new FormControl(),
        secondGroup: new FormControl(),
      }),
    }),

    attunements: new FormGroup({
      slotOne: new FormControl(),
      slotTwo: new FormControl(),
      slotThree: new FormControl(),
      slotFour: new FormControl(),
    }),

    inventory: new FormGroup({
      1: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      2: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      3: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      4: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      5: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      6: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      7: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      8: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      9: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      10: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      11: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      12: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      13: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      14: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      15: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      16: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      17: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      18: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      19: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
      20: new FormGroup({
        slotOne: new FormControl(),
        slotTwo: new FormControl(),
      }),
    }),

    notes: new FormGroup({
      value: new FormControl(),
    })
  });


  ngOnInit(): void {
    // window.localStorage.removeItem('whitehack_sheet_lux');
    this.fillCharacterSheet();
    this.detectChanges();
  }

  private fillCharacterSheet() {
    const lStore = window.localStorage.getItem('whitehack_sheet_lux');
    if (lStore) {
      const data = JSON.parse(lStore);
      this.characterSheet.setValue({
        identity: {
          name: data.identity.name || '',
          species: data.identity.species || '',
          vocation: data.identity.vocation || '',
          pronouns: data.identity.pronouns || '',
          details: data.identity.details || '',
        },
        stats: {
          xp: {
            current: data.stats.xp.current || '',
            next: data.stats.xp.next || ''
          },
          level: data.stats.level || '',
          hitPoints: {
            current: data.stats.hitPoints.current || '',
            max: data.stats.hitPoints.max || ''
          },
          attack: {
            value: data.stats.attack.value || '',
            weapon: data.stats.attack.weapon || '',
            dmg: data.stats.attack.dmg || ''
          },
          armorClass: data.stats.armorClass || '',
          savingThrow: data.stats.savingThrow || '',
          movement: data.stats.movement || '',
          init: data.stats.init || '',
        },
        traits: {
          strength: {
            value: data.traits.strength.value || '',
            firstGroup: data.traits.strength.firstGroup || '',
            secondGroup: data.traits.strength.secondGroup || '',
          },
          constitution: {
            value: data.traits.constitution.value || '',
            firstGroup: data.traits.constitution.firstGroup || '',
            secondGroup: data.traits.constitution.secondGroup || '',
          },
          dexterity: {
            value: data.traits.dexterity.value || '',
            firstGroup: data.traits.dexterity.firstGroup || '',
            secondGroup: data.traits.dexterity.secondGroup || '',
          },
          charisma: {
            value: data.traits.charisma.value || '',
            firstGroup: data.traits.charisma.firstGroup || '',
            secondGroup: data.traits.charisma.secondGroup || '',
          },
          wisdom: {
            value: data.traits.wisdom.value || '',
            firstGroup: data.traits.wisdom.firstGroup || '',
            secondGroup: data.traits.wisdom.secondGroup || '',
          },
          intelligence: {
            value: data.traits.intelligence.value || '',
            firstGroup: data.traits.intelligence.firstGroup || '',
            secondGroup: data.traits.intelligence.secondGroup || '',
          },
        },
        attunements: {
          slotOne: data.attunements.slotOne,
          slotTwo: data.attunements.slotTwo,
          slotThree: data.attunements.slotThree,
          slotFour: data.attunements.slotFour,
        },
        inventory: {
          1: {
            slotOne: data.inventory[1].slotOne || '',
            slotTwo: data.inventory[1].slotTwo || '',
          },
          2: {
            slotOne: data.inventory[2].slotOne || '',
            slotTwo: data.inventory[2].slotTwo || '',
          },
          3: {
            slotOne: data.inventory[3].slotOne || '',
            slotTwo: data.inventory[3].slotTwo || '',
          },
          4: {
            slotOne: data.inventory[4].slotOne || '',
            slotTwo: data.inventory[4].slotTwo || '',
          },
          5: {
            slotOne: data.inventory[5].slotOne || '',
            slotTwo: data.inventory[5].slotTwo || '',
          },
          6: {
            slotOne: data.inventory[6].slotOne || '',
            slotTwo: data.inventory[6].slotTwo || '',
          },
          7: {
            slotOne: data.inventory[7].slotOne || '',
            slotTwo: data.inventory[7].slotTwo || '',
          },
          8: {
            slotOne: data.inventory[8].slotOne || '',
            slotTwo: data.inventory[8].slotTwo || '',
          },
          9: {
            slotOne: data.inventory[9].slotOne || '',
            slotTwo: data.inventory[9].slotTwo || '',
          },
          10: {
            slotOne: data.inventory[10].slotOne || '',
            slotTwo: data.inventory[10].slotTwo || '',
          },
          11: {
            slotOne: data.inventory[11].slotOne || '',
            slotTwo: data.inventory[11].slotTwo || '',
          },
          12: {
            slotOne: data.inventory[12].slotOne || '',
            slotTwo: data.inventory[12].slotTwo || '',
          },
          13: {
            slotOne: data.inventory[13].slotOne || '',
            slotTwo: data.inventory[13].slotTwo || '',
          },
          14: {
            slotOne: data.inventory[14].slotOne || '',
            slotTwo: data.inventory[14].slotTwo || '',
          },
          15: {
            slotOne: data.inventory[15].slotOne || '',
            slotTwo: data.inventory[15].slotTwo || '',
          },
          16: {
            slotOne: data.inventory[16].slotOne || '',
            slotTwo: data.inventory[16].slotTwo || '',
          },
          17: {
            slotOne: data.inventory[17].slotOne || '',
            slotTwo: data.inventory[17].slotTwo || '',
          },
          18: {
            slotOne: data.inventory[18].slotOne || '',
            slotTwo: data.inventory[18].slotTwo || '',
          },
          19: {
            slotOne: data.inventory[19].slotOne || '',
            slotTwo: data.inventory[19].slotTwo || '',
          },
          20: {
            slotOne: data.inventory[20].slotOne || '',
            slotTwo: data.inventory[20].slotTwo || '',
          },
        },
        notes: {
          value: data.notes.value
        }
      });
    }
  }

  detectChanges() {
    this.characterSheet.valueChanges.subscribe(result => {
      window.localStorage.setItem('whitehack_sheet_lux', JSON.stringify(result));
    });
  }

  changeBackground(event: any) {
    console.log(event);
  }

  download() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.characterSheet.value));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    const title = `${this.characterSheet.value.identity.name.toUpperCase()}_SHEET` || 'UNNAMED_SHEET'

    if (dlAnchorElem) {
      dlAnchorElem.setAttribute('href', dataStr);
      dlAnchorElem.setAttribute('download', `${title}.json`);
    }
  }

  loadCharacter(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsText(selectedFile, 'UTF-8');
    fileReader.onload = () => {
      if (fileReader.result?.toString()) {
        const loadResults = JSON.parse(fileReader.result.toString());
        window.localStorage.setItem('whitehack_sheet_lux', JSON.stringify(loadResults));
        this.fillCharacterSheet();
        this.selectedSection = 'stats';
        this.reset();
      }
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  private reset() {
    this.inputRef.nativeElement.value = '';
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
