import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  @Input() message: string | null = null;

  @Output() toastEvent = new EventEmitter<string>();

  onToat(): void {
    if (this.message) {
      this.toastEvent.emit(this.message);
    }
  }

  onClose(): void {
    this.message = null;
  }
}
