import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-attunements',
  templateUrl: './attunements.component.html',
  styleUrls: ['./attunements.component.scss']
})
export class AttunementsComponent implements OnInit {
  showAttunements = false;
  currentJob = '';
  timer: any;
  attunementsForm = new FormGroup({
    strong: new FormGroup({
      keywords: new FormGroup({
        value: new FormControl(''),
        currentUses: new FormControl(),
        maxUses: new FormControl(),
      }),
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
    brave: new FormGroup({
      one: new FormControl(),
      two: new FormControl(),
      three: new FormControl(),
      four: new FormControl(),
    }),
    fortunate: new FormGroup({
      firstSection: new FormGroup({
        identity: new FormControl(),
        vocation: new FormControl(),
        xp: new FormControl(),
        hd: new FormControl(),
        hp: new FormControl(),
        ac: new FormControl(),
        st: new FormControl(),
        av: new FormControl(),
        morale: new FormControl(),
        special: new FormControl(),
      })
    }),
  });

  slotHighlightObject: any = {
    wise: {
      first: {
        one: false,
        two: false,
        three: false,
        fourth: false,
        fifth: false,
      },
      second: {
        one: false,
        two: false,
      },
      third: {
        one: false,
        two: false,
      },
      fourth: {
        one: false,
        two: false,
      },
      fifth: {
        one: false,
        two: false,
      }
    },
    deft: {
      first: {
        one: false,
        two: false,
      },
      second: {
        one: false,
        two: false,
      },
      third: {
        one: false,
        two: false,
      },
      fourth: {
        one: false,
        two: false,
      },
    },
  };

  constructor(
    private renderer: Renderer2,
    private storageManagerService: StorageManagerService,
  ) { }

  ngOnInit(): void {
    const attunementsData: any = this.storageManagerService.getFromStorage('attunements');
    const highlightSlotData: any = this.storageManagerService.getFromStorage('highlights');
    const currentJobData: any = this.storageManagerService.getFromStorage('currentJob');
    if (currentJobData) {
      this.currentJob = currentJobData;
    }
    if (attunementsData) {
      this.attunementsForm.patchValue({
        strong: {
          keywords: {
            value: attunementsData.strong.keywords.value,
            currentUses: attunementsData.strong.keywords.currentUses,
            maxUses: attunementsData.strong.keywords.maxUses,
          },
          one: attunementsData.strong.one,
          two: attunementsData.strong.two,
          three: attunementsData.strong.three,
          four: attunementsData.strong.four,
        },
        wise: {
          firstSection: {
            one: attunementsData.wise.firstSection.one,
            two: attunementsData.wise.firstSection.two,
            three: attunementsData.wise.firstSection.three,
            four: attunementsData.wise.firstSection.four,
          },
          secondSection: {
            one: attunementsData.wise.secondSection.one,
            two: attunementsData.wise.secondSection.two,
          },
          thirdSection: {
            one: attunementsData.wise.thirdSection.one,
            two: attunementsData.wise.thirdSection.two,
          },
          fourSection: {
            one: attunementsData.wise.fourSection.one,
            two: attunementsData.wise.fourSection.two,
          },
          fifthSection: {
            one: attunementsData.wise.fifthSection.one,
            two: attunementsData.wise.fifthSection.two,
          }
        },
        deft: {
          firstSection: {
            one: attunementsData.deft.firstSection.one,
            two: attunementsData.deft.firstSection.two,
          },
          secondSection: {
            one: attunementsData.deft.secondSection.one,
            two: attunementsData.deft.secondSection.two,
          },
          thirdSection: {
            one: attunementsData.deft.thirdSection.one,
            two: attunementsData.deft.thirdSection.two,
          },
          fourSection: {
            one: attunementsData.deft.fourSection.one,
            two: attunementsData.deft.fourSection.two,
          },
        },
        brave: {
          one: attunementsData.brave.one,
          two: attunementsData.brave.two,
          three: attunementsData.brave.three,
          four: attunementsData.brave.four,
        },
      });
    }
    if (highlightSlotData) {
      this.slotHighlightObject = highlightSlotData;
    }

    this.attunementsForm.valueChanges.subscribe(changes => {
      this.storageManagerService.addToStorage('attunements', changes);
    });
  }

  changeJob(newJob: string) {
    this.currentJob = newJob;
    this.storageManagerService.addToStorage('currentJob', this.currentJob);
    this.setAttunements();
  }

  toggleAttunements() {
    this.showAttunements = !this.showAttunements;
    if (this.currentJob && this.showAttunements) {
      this.setAttunements();
    }
  }

  touchStart(event: any) {
    if (this.currentJob !== 'strong') {
      this.timer = setTimeout(() => {
        this.addRemoveLongTouchClass(event);
      }, 1000);
    }
  }

  touchEnd() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  addRemoveLongTouchClass(event: any) {
    const chosen = event.target.classList.contains('chosen');
    const children = this.renderer.parentNode(event.target).children;

    const seek = event.target.id.split(' ');
    const classSeek = seek[2] as keyof typeof this.slotHighlightObject;
    const groupSeek = seek[0] as keyof typeof this.slotHighlightObject;
    const slotSeek = seek[1] as keyof typeof this.slotHighlightObject;

    if (chosen) {
      this.renderer.removeClass(event.target, 'chosen');
    } else {
      // remove class from children
      for (let i = 0; i < children.length; i++) {
        this.renderer.removeClass(children[i], 'chosen');
      }
      // reset group in slotHighlightObject
      for(const [key,value] of Object.entries(this.slotHighlightObject[classSeek][groupSeek])) {
        this.slotHighlightObject[classSeek][groupSeek][key] = false;
      }
      this.renderer.addClass(event.target, 'chosen');
    }
    this.slotHighlightObject[classSeek][groupSeek][slotSeek] = event.target.classList.contains('chosen');

    this.storageManagerService.addToStorage('highlights', this.slotHighlightObject);
  }

  setAttunements() {
    if (this.currentJob) {
      setTimeout(() => {
        const slotObj = this.slotHighlightObject;
        // iterate over obj
        Object.keys(slotObj).forEach(job => {
          const currJob = job;
          // we have the current job, lets get the groups
          if (currJob === this.currentJob) {
            Object.keys(slotObj[currJob]).forEach(group => {
              const currGroup = group;
              // we have the currentGroup, lets check the slot value
              Object.keys(slotObj[currJob][currGroup]).forEach(slot => {
                const currSlot = slot;
                if (slotObj[currJob][currGroup][currSlot]) {
                  // group slot job
                  this.renderer.addClass(document.getElementById(`${currGroup} ${currSlot} ${currJob}`), 'chosen');
                }
              })
            })
          }
        });
      });
    }

  }

}
