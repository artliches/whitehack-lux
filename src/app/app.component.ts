import { trigger, transition, style, animate } from '@angular/animations';
import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
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

    trigger('slideUpDown', [
      transition(':enter', [
        style({opacity: 0, transform: 'translate3d(0, -300%, 0'}),
        animate('400ms ease-in-out', style({opacity: 1, transform: 'translate3d(0,0,0)'})),
      ]),
      transition(':leave', [
        animate('400ms ease-in-out', style({opacity: 0, transform: 'translate3d(0, -300%, 0'}))
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2
  ) {}
  @ViewChild('fileUploadInput', {static: false}) inputRef: any;
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('name') nameRef!: ElementRef;
  @ViewChild('stats') statsRef!: ElementRef;

  @HostListener('document: scroll')
  hideIcon() {
    if (this.showIcon) {
      const currCheck = this.icon.nativeElement.getBoundingClientRect().height;
      const currScroll = window.scrollY;
      let opacity = 1;
      
      if (currScroll <= currCheck) {
        opacity = 1 - currScroll / currCheck;
      } else {
        opacity = 0;
      }
      this.icon.nativeElement.style.opacity = opacity;
    }
  }

  currentJob = '';
  showUtilities = false;
  imageUrl = '';
  selectedSection = 'stats';
  showIcon = true;
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
      strong: new FormGroup({
        one: new FormControl(),
        two: new FormControl(),
        three: new FormControl(),
        four: new FormControl(),
      }),
      wise: new FormGroup({
        firstSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
          three: new FormControl(),
          four: new FormControl(),
        }),
        secondSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        }),
        thirdSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        }),
        fourSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        }),
        fifthSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        })
      }),
      deft: new FormGroup({
        firstSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        }),
        secondSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        }),
        thirdSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        }),
        fourSection: new FormGroup({
          one: new FormControl(),
          two: new FormControl(),
        }),
      }),
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
  timer: any;


  ngOnInit(): void {
    this.fillCharacterSheet();
    this.detectChanges();
  }

  touchStart(event: TouchEvent) {
    console.log(event.target);
    this.timer = setTimeout(() => {
      this.addRemoveLongTouchClass(event);
    }, 1000);
  }

  touchEnd() {
    console.log('test');
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  addRemoveLongTouchClass(event: any) {
    console.log('addremove');
    const chosen = event.target.classList.contains('chosen');

    if (chosen) {
      this.renderer.removeClass(event.target, 'chosen');
    } else {
      this.renderer.addClass(event.target, 'chosen');
    }
  }

  kill() {
    window.localStorage.removeItem('whitehack_sheet_lux');
    this.emptyCharacterSheet();
    this.selectedSection = 'stats';
  }

  private emptyCharacterSheet() {
    this.characterSheet.setValue({
      identity: {
        name: '',
        species: '',
        vocation: '',
        pronouns: '',
        details: '',
      },
      stats: {
        xp: {
          current: '',
          next: '',
        },
        level: '',
        hitPoints: {
          current: '',
          max: '',
        },
        attack: {
          value:'',
          weapon: '',
          dmg: '',
        },
        armorClass: '',
        savingThrow:'',
        movement: '',
        init: '',
      },
      traits: {
        strength: {
          value: '',
          firstGroup: '',
          secondGroup: '',
        },
        constitution: {
          value: '',
          firstGroup: '',
          secondGroup: '',
        },
        dexterity: {
          value: '',
          firstGroup: '',
          secondGroup: '',
        },
        charisma: {
          value: '',
          firstGroup: '',
          secondGroup: '',
        },
        wisdom: {
          value: '',
          firstGroup: '',
          secondGroup: '',
        },
        intelligence: {
          value: '',
          firstGroup: '',
          secondGroup: '',
        },
      },
      attunements: {
        strong: {
          one:    '',
          two:    '',
          three:  '',
          four:   '',
        },
        wise: {
          firstSection: {
            one:   '',
            two:   '',
            three: '',
            four:  '',
          },
          secondSection: {
            one: '',
            two: '',
          },
          thirdSection: {
            one: '',
            two: '',
          },
          fourSection: {
            one: '',
            two: '',
          },
          fifthSection: {
            one: '',
            two: '',
          }
        },
        deft: {
          firstSection: {
            one:   '',
            two:   '',
          },
          secondSection: {
            one: '',
            two: '',
          },
          thirdSection: {
            one: '',
            two: '',
          },
          fourSection: {
            one: '',
            two: '',
          },
        },
      },
      inventory: {
        1: {
          slotOne: '',
          slotTwo: '',
        },
        2: {
          slotOne: '',
          slotTwo: '',
        },
        3: {
          slotOne: '',
          slotTwo: '',
        },
        4: {
          slotOne: '',
          slotTwo: '',
        },
        5: {
          slotOne: '',
          slotTwo: '',
        },
        6: {
          slotOne: '',
          slotTwo: '',
        },
        7: {
          slotOne: '',
          slotTwo: '',
        },
        8: {
          slotOne: '',
          slotTwo: '',
        },
        9: {
          slotOne: '',
          slotTwo: '',
        },
        10: {
          slotOne: '',
          slotTwo: '',
        },
        11: {
          slotOne: '',
          slotTwo: '',
        },
        12: {
          slotOne: '',
          slotTwo: '',
        },
        13: {
          slotOne: '',
          slotTwo: '',
        },
        14: {
          slotOne: '',
          slotTwo: '',
        },
        15: {
          slotOne: '',
          slotTwo: '',
        },
        16: {
          slotOne: '',
          slotTwo: '',
        },
        17: {
          slotOne: '',
          slotTwo: '',
        },
        18: {
          slotOne: '',
          slotTwo: '',
        },
        19: {
          slotOne: '',
          slotTwo: '',
        },
        20: {
          slotOne: '',
          slotTwo: '',
        },
      },
      notes: {
        value: ''
      }
    });
    this.imageUrl = '';
    this.currentJob = '';

    this.setSheet(this.characterSheet.value);
  }

  private fillCharacterSheet() {
    const lStore = window.localStorage.getItem('whitehack_sheet_lux');
    if (lStore) {
      const init = JSON.parse(lStore);
      const data = JSON.parse(init.sheet);
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
          strong: {
            one:    data.attunements.strong.one || '',
            two:    data.attunements.strong.two || '',
            three:  data.attunements.strong.three || '',
            four:   data.attunements.strong.four || '',
          },
          wise: {
            firstSection: {
              one:   data.attunements.wise.firstSection.one || '',
              two:   data.attunements.wise.firstSection.two || '',
              three: data.attunements.wise.firstSection.three || '',
              four:  data.attunements.wise.firstSection.four || '',
            },
            secondSection: {
              one: data.attunements.wise.secondSection.one || '',
              two: data.attunements.wise.secondSection.two || '',
            },
            thirdSection: {
              one: data.attunements.wise.thirdSection.one || '',
              two: data.attunements.wise.thirdSection.two || '',
            },
            fourSection: {
              one: data.attunements.wise.fourSection.one || '',
              two: data.attunements.wise.fourSection.two || '',
            },
            fifthSection: {
              one: data.attunements.wise.fifthSection.one || '',
              two: data.attunements.wise.fifthSection.two || '',
            }
          },
          deft: {
            firstSection: {
              one:   data.attunements.deft.firstSection.one || '',
              two:   data.attunements.deft.firstSection.two || '',
            },
            secondSection: {
              one: data.attunements.deft.secondSection.one || '',
              two: data.attunements.deft.secondSection.two || '',
            },
            thirdSection: {
              one: data.attunements.deft.thirdSection.one || '',
              two: data.attunements.deft.thirdSection.two || '',
            },
            fourSection: {
              one: data.attunements.deft.fourSection.one || '',
              two: data.attunements.deft.fourSection.two || '',
            },
          },
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
      if (init.img) {
        this.imageUrl = init.img;
      }
      if (init.currentJob) {
        this.currentJob = init.currentJob;
      }
    }
  }

  private setSheet(charSheet: any) {
    const saveObject = {
      img: this.imageUrl,
      currentJob: this.currentJob,
      sheet: JSON.stringify(charSheet)
    };
    window.localStorage.setItem('whitehack_sheet_lux', JSON.stringify(saveObject));
  }

  changeJob(chosenJob: string) {
    this.currentJob = chosenJob;
    this.setSheet(this.characterSheet.value);
  }

  detectChanges() {
    this.characterSheet.valueChanges.subscribe(result => {
      this.setSheet(result);
    });
  }

  download() {
    const saveSheet = {
      img: this.imageUrl,
      currentJob: this.currentJob,
      sheet: JSON.stringify(this.characterSheet.value)
    };
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(saveSheet));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    const title = `${this.characterSheet.value.identity.name.toUpperCase()}_SHEET` || 'UNNAMED_SHEET'

    if (dlAnchorElem) {
      dlAnchorElem.setAttribute('href', dataStr);
      dlAnchorElem.setAttribute('download', `${title}.json`);
    }
  }

  imageUpload(event: any) {
    const selectedImage = event.target.files[0];
    if (!selectedImage) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedImage);
    fileReader.onload = () =>{
      if (fileReader.result) {
        this.imageUrl = fileReader.result.toString();
        this.setSheet(this.characterSheet.value);
      }
    }
  }

  loadCharacter(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsText(selectedFile, 'UTF-8');
    fileReader.onload = () => {
      if (fileReader.result?.toString()) {
        const loadResults = JSON.parse(fileReader.result.toString());
        
        this.imageUrl = loadResults.img;
        this.currentJob = loadResults.currentJob;
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
}
