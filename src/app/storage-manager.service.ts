import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {
  address = 'whitehack-lux_';
  charSheetList = [
    'identity',
    'icon',
    'stats',
    'traits',
    'attunements',
    'highlights',
    'currentJob',
    'inventory',
    'minor',
    'notes',
  ];

  constructor() { }

  addToStorage(key: string, data: any) {
    const saveObj = JSON.stringify(data);
    window.localStorage.setItem(`${this.address}${key}`, JSON.stringify(saveObj));
  }

  getFromStorage(key: string) {
    const data: any = window.localStorage.getItem(`${this.address}${key}`);
    if (data) {
      return JSON.parse(JSON.parse(data));
    } else {
      return null;
    }
  }

  clearStorage() {
    window.localStorage.clear();
    location.reload();
  }

  saveSheet() {
    const saveObj: any = {};
    let name = '';
    this.charSheetList.forEach(key => {
      const data: any = window.localStorage.getItem(`${this.address}${key}`);
      if (data) {
        saveObj[key] = data;
        if (key === 'identity') {
          name = JSON.parse(JSON.parse(data)).name;
        }
      }
    });

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(saveObj));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    const title = name ? `${name.toUpperCase()}_SHEET` : 'UNNAMED_SHEET'

    if (dlAnchorElem) {
      dlAnchorElem.setAttribute('href', dataStr);
      dlAnchorElem.setAttribute('download', `${title}.json`);
    }
  }

  loadSheet(event: any) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsText(selectedFile, 'UTF-8');
    fileReader.onload = () => {
      if (fileReader.result?.toString()) {
        const loadResults = JSON.parse(fileReader.result.toString());
        Object.keys(loadResults).forEach(key => {
          window.localStorage.setItem(`${this.address}${key}`, loadResults[key]);
        });
        location.reload();
      }
    };
    fileReader.onerror = (error) => {
      console.error(error);
    };
  }
}
