import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../assets/figure/тура ч.png"
import whiteLogo from "../../assets/figure/тура б.png"
export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.ROOK
    }
}