import { BehaviorSubject } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  public toastEvents$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private socket: Socket) {
    this.joinFindFriendship.subscribe((data) => {
      console.log(data);
      this.toastEvents$.next({ data, type: 'joinFindFriendship' });
    });

    this.newAcceptFriend.subscribe((data) => {
      console.log(data);

      this.toastEvents$.next({ data, type: 'newAcceptFriend' });
    });

    this.newDenyFriend.subscribe((data) => {
      console.log(data);

      this.toastEvents$.next({ data, type: 'newDenyFriend' });
    });

    this.newFriendRequest.subscribe((data) => {
      console.log(data);

      this.toastEvents$.next({ data, type: 'newFriendRequest' });
    });
  }

  private get joinFindFriendship() {
    return this.socket.fromEvent<any>('joinFindFriendship');
  }

  // newAcceptFriend

  private get newAcceptFriend() {
    return this.socket.fromEvent<any>('newAcceptFriend');
  }

  //newDenyFriend

  private get newDenyFriend() {
    return this.socket.fromEvent<any>('newDenyFriend');
  }

  //newFriendRequest

  private get newFriendRequest() {
    return this.socket.fromEvent<any>('newFriendRequest');
  }
}
