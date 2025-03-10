import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../assets/figure/пішка ч.png"
import whiteLogo from "../../assets/figure/пішка б.png"
export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.PAWN
    }
}