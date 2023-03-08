import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lookingForFriendship',
})
export class LookingForFriendshipPipe implements PipeTransform {
  transform(value: any, looking?: boolean): any {
    if (!looking) {
      return value
        .sort(
          (a: any, b: any) => b.value.accepted.length - a.value.accepted.length
        );
    }

    return value
      .filter((item: any) => item.value.status === 'buscando')
      .sort(
        (a: any, b: any) => b.value.accepted.length - a.value.accepted.length
      );
  }
}
