import { Cell } from "../Cell"
import { Colors } from "../Colors"
import { Figure, FigureNames } from "./Figure"
import blackLogo from "../../assets/figure/королева ч.png"
import whiteLogo from "../../assets/figure/королева б.png"
export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.QUEEN
    }
    canMove(target: Cell) : boolean {
        if(!super.canMove(target)){
            return false
        }
        if(this.cell.isEmptyVertycal(target)){
            return true
        }
        return false
    }
}