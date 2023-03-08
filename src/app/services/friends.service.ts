import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private peopleData$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private socket: Socket) {
    this.peopleDataSocket.subscribe((data) => {
      this.peopleData$.next(data);
    });
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  getMessage() {
    return this.socket.fromEvent('message').pipe(map((data: any) => data.msg));
  }

  public get peopleData() {
    return this.peopleData$;
  }

  public get peopleDataValue() {
    return this.peopleData$.value;
  }

  private get peopleDataSocket() {
    return this.socket.fromEvent<any>('peopleData');
  }
}
