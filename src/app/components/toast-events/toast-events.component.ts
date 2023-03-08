import { ToastComponent } from './../toast/toast.component';
import { ToastsService } from './../../services/toasts.service';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'xilerth-toast-events',
  templateUrl: './toast-events.component.html',
  styleUrls: ['./toast-events.component.scss'],
})
export class ToastEventsComponent implements AfterViewInit {
  @ViewChild('entryPoint', { read: ViewContainerRef }) entryPoint: any;

  constructor(
    private toastService: ToastsService,
    public ViewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    this.toastService.toastEvents$.subscribe((toast) => {
      //Generate dinamiclly the xilerth-toast component angular
      if (!toast) {
        return;
      }
      const id = this.generateRandomId();
      const componentRef = this.entryPoint.createComponent(ToastComponent);
      componentRef.instance.data = toast;
      //add id
      componentRef.instance.id = id;

      // remove toast after 5 seconds
      setTimeout(() => {
        this.entryPoint.remove(this.entryPoint.indexOf(componentRef.hostView));
      }, 5000);

    });
  }

  generateRandomId() {
    return Math.floor(Math.random() * 1000000);
  }
}
