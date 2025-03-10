import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../assets/figure/слон ч.png"
import whiteLogo from "../../assets/figure/слон б.png"
import { Colors } from "../Colors"
import { Cell } from "../Cell"
export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.BISHOP
    }
}