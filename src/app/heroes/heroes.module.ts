import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        //ponemos lo que se va a usar fuera del módulo, visibles fuera del módulo
        ListadoComponent
    ],
    imports:[
        //van a ir solo módulos en esta parte
        CommonModule
    ]
})
export class HeroesModule{}
