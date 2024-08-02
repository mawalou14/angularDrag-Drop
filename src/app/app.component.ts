import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from './data.service';
import { ObjectModel } from './model/model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DragDropModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dragDropCards';

  public dataService = inject(DataService);

  drop(event: CdkDragDrop<ObjectModel[]>) {
    const draggedItemData = event.item.data;
    const previousContainer = event.previousContainer;
    const newContainer = event.container;

    const draggedItemId = draggedItemData.id;
    const newContainerId = +newContainer.id;

    if (+previousContainer.id === +newContainer.id) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // changeContainerId(itemId: number, newContainerId: number)
      this.dataService.changeContainerId(draggedItemId, newContainerId);
    }
  }
}
