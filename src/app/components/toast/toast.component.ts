import { Component, HostListener, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'xilerth-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent{
  @Input() set data(data: any) {
    this._data = data?.data;
    this.type = data?.type;
    this.generateData(data?.data);
  }
  public type = ' ';
  public _data: any;
  public typelist = {
    joinFindFriendship: 'joinFindFriendship',
    newAcceptFriend: 'newAcceptFriend',
    newDenyFriend: 'newDenyFriend',
    newFriendRequest: 'newFriendRequest',
  }
  public message = '';
  public title = '';


  public playSound(soundName: string) {
    const audio = new Audio();
    audio.src = `assets/${soundName}.wav`;
    audio.load();
    audio.play();
  }

  public generateData(data: any){
    switch (this.type) {
      case this.typelist.joinFindFriendship:
        this.message = `${data.username} se ha unido a la búsqueda de amistad!`;
        this.title = `Buscando amistad`;
        this.playSound('joinFindFriendship');
        break;
      case this.typelist.newAcceptFriend:
        this.message = `${data.accepter} ha aceptado la solicitud de amistad de ${data.accepted} !`;
        this.title = `Nuevo amigo 😀`;
        this.playSound('newAcceptFriend');
        break;
      case this.typelist.newDenyFriend:
        this.message = `${data.denier} ha denegado la solicitud de amistad de ${data.denied}!`;
        this.title = `Amigo denegado 💩`;
        this.playSound('newDenyFriend');
        break;
      case this.typelist.newFriendRequest:
        this.message = `${data.requester} ha enviado una solicitud de amistad a ${data.requested}!`;
        this.title = `Nueva solicitud de amistad ❤️`;
        this.playSound('newFriendRequest');
        break;
      default:
        break;
    }
  }


}


