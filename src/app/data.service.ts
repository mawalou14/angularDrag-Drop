import { Injectable, signal } from '@angular/core';
import { ObjectModel } from './model/model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  DUMMY_DATA = signal([
    { id: 1, containerId: 1, text: 'Youtube Tutorial' },
    { id: 2, containerId: 1, text: 'Drag Drop Video' },
    { id: 3, containerId: 2, text: 'Angular' },
    { id: 4, containerId: 2, text: 'Typescript' },
    { id: 5, containerId: 3, text: 'More information' },
    { id: 6, containerId: 3, text: 'Angular Material' },
    { id: 7, containerId: 1, text: 'Life Is easy' },
    { id: 8, containerId: 1, text: 'Lemons Squeezy' },
    { id: 9, containerId: 2, text: 'Codding is essential' },
    { id: 10, containerId: 1, text: 'Avatar for the header' },
    { id: 11, containerId: 1, text: 'Header with more content' },
    { id: 12, containerId: 2, text: 'Main for the body container' },
    { id: 13, containerId: 1, text: 'Education and Knowledge' },
    { id: 14, containerId: 2, text: 'Programing Syntax' },
  ]);

  container1 = signal(this.getContainerItems(1));
  container2 = signal(this.getContainerItems(2));
  container3 = signal(this.getContainerItems(3));

  getContainerItems(containerId: number): ObjectModel[] {
    return this.DUMMY_DATA().filter((item) => item.containerId === containerId);
  }

  changeContainerId(itemId: number, newContainerId: number): void {
    const items = this.DUMMY_DATA();
    const item = items.find((item) => item.id === itemId);
    if (item) {
      item.containerId = newContainerId;
      this.DUMMY_DATA.set(items);
      this.updateContainers();
    }
  }

  private updateContainers(): void {
    this.container1.set(this.getContainerItems(1));
    this.container2.set(this.getContainerItems(2));
    this.container3.set(this.getContainerItems(3));
  }
}
