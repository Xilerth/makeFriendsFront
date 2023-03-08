import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peopleStatus',
})
export class PeopleStatusPipe implements PipeTransform {
  public status: any = {
    0: 'Desarrollador',
    10: 'Saliendo de la cueva',
    20: 'Viendo el sol',
    22: 'Soy un pato',
    30: 'Conociendo gente',
    40: 'Amigo de mis amigos',
    50: 'Selectivo',
    60: 'Vivan los amigos',
    70: 'Necesito mas amigos',
    80: 'Amo a la gente',
    90: '¿Nos conocemos?',
    100: 'Amigo de todos',
  };

  transform(value: number): string {
    if (!value) {
      return 'Desconocido';
    }

    if (value === 22) {
      return this.status[value];
    }

    return this.status[Math.trunc(value / 10) * 10];
  }
}
