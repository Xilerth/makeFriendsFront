import { FriendsService } from './services/friends.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'makeFriendsFront';

  constructor() {
    console.log(`
     
                                                                       '
                                                  ,╓▄▄▄▄▄▄▄▄▄▄▄,,
                                            ,▄▄▓▓▓▓▀▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓@▄,
                                         ▄▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀▓▓▓▓▓▓▓▓▓▓▓▓▓w
                                       ┌▓▓▓▀▀▀▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓╢╬@╖
                                      ,▓░░░φ@@@@@@@░░░░▀╩▓▓▓▓▓╢╣▓▓▓▓▓▓╫╢╣▒▒▒▒╫╖
                                      ▓▌¿╢╣▓▓╣▓▓╣╢╣▓▓╢▓▓@@░░░╙▓╣╣▓▓╣╫╫░]▒▒▒▒▒▒▒@
                                     ▐╢,╟╣╧   ╙▓╣▓╣╣▓▓╢▓╣╢╣▓@░░░╙▓╣╣░▒░▒░░░▒░▒▒K
                                     ▓▌jY██F     ▓╢╣╣╣╣╫╣▓╣Å╙╙╩╢@╖░╫╢░░░░░░░'''└░
                                    ]╢░▒L        ╠▓▓╣╣╢▓╫█▄     ╟╢╢╟╢░░░░░  xⁿ└ 
                                    ▐▓,╢Ω       ¿╟╢╢╣╣▓M▀▀▀      ║╣╫Ñ░░░░ ┘
                 .                  ▓▌░╢╣╢J≈,,¿░╓╣╣╢╣╣╣Ü         ░▌╢░░░░'    ¬ Å╛
             ╒F▄█▓▓▓▀▀▀▄,           ╟▌░╜╙╣╣▓@@╬▓╣▒╙▀▀▀╙╢Ç╕     ,░░Ñ╣░░░░░, 
         , j╣▓▓▓▓▒"      ▀▄         ▐╫╖b╢╫▓╢╬╣╣╣╣╣╢╣▓╣╣╢╣W░░░░░░╓╢H╣░░░░░░ .
         Qg░║╣╟▓▓▌        k         └╙▀╩╣▓╢@╢╫╣▓▓╬▓╣╢╣╢▓╢╢▓╬╬╣╣╣╣Ü▒░░░░░░░░
        ∩╢╢╝╝╣Ü▓╢▒   █▌    'µ             .   ╙╙╙╩╩╬▓╬@╬╣╢║╩╬W¡░,]░▒░░░░"
        ⌠╛░░░ⁿ┐ ╫╢╣         [                 ╢@░░░░░░░░░╙╙╝╣╣╢╢╣╢╣▒░░
        Γ░░░░░r  ╢░╢@┐.    ,φ                 ▌▓¡╠╢╣@@╖░░ ╓;'''¡░░╙╙     .░
        '░░░░░░  ░░╙╝╜╣╢╣Ñ╝║┘                ]╣╣▓▓╢▓╢╢╣╢╣╖╓╙╙╙ ░╥╖r      ░░
         ^─^  ,░░░░▒▒▒▒░▒   ¿             ▐▓▓╫╢╢╢╢╢╢╣╢╢▒╣╣▒╣▒╣▒▒╕  .¡░░░
          '≡,,;¡░░░░░░░▒"   ─                ▐▓▓╢╢╢╢╢╣╢╣╢╣╣▒╢▒▒▒▒▒░░└░░░░░░░
                 ░░░░▒▒╢                     ▐▀╜╙╣╫╜╜╩╢╢╢▒▒▒╣║▒╣▒▒H░░¡░░░░░░
              ╚,¡░░░░▓▓▀                     ▐@╓¡║╣░░ ░▒░ └╙▒╣▒▒▒▒░░░░░¡¡░░'
              █ , "¡░▒▒▒                       ╙╙╨╩%ß╬╢g,,░╠▒▒▒▒▒▒░└¡'░'
              █,░ ░░░░«                                  '╙╙╙╙╙""'
               ]┐,"▓ ~                                 ,
               ▒░░░, ¡░,                           .,@▒▒▒░░░,╜╔▒╣H░░"ß%*,╓╓,,,,,
                                               """"""""""""""""""""""""""
`);
    console.log(
      '%cMake Friends',
      'color: #2E424D; font-size: 50px; font-weight: bold'
    );
    const origin = location.origin;
    console.log(
      '%c(Dev tool) insta win ' + `${origin}/makemepopular`,
      'color: red; font-size: 20px; font-weight: bold'
    );
  }
}
