import logo from "../../assets/figure/королева б.png"
import { Cell } from "../Cell"
import { Colors } from "../Colors"
export const enum FigureNames {
    FIGURE = "Фігура",
    KING = "Король",
    KNIGHT = "Кінь",
    PAWN = "Пешка",
    QUEEN = "Королева",
    ROOK = "Тура",
    BISHOP ="Офіцер",
}
export class Figure {
    color: Colors
    logo: typeof logo | null
    cell: Cell
    name: FigureNames 
    id: number
    constructor(color: Colors, cell: Cell){
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }
    canMove(target: Cell) : boolean {
        return true
    }
    moveFigure(target: Cell){
        
    }
}