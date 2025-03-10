import { Cell } from "./Cell"
import { Colors } from "./Colors";
import { Bishop } from "./figure/Bishop";
import { King } from "./figure/King";
import { Knight } from "./figure/Knight";
import { Pawn } from "./figure/Pawn";
import { Queen } from "./figure/Queen";
import { Rook } from "./figure/Rook";
export class Board {
    cells: Cell[][] = []
    public initCells() {
        for (let i = 0; i < 8; i += 1) {
            const row: Cell[] = [];
            for (let j = 0; j < 8; j += 1) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, i, j, Colors.BLACK, null)) //black
                } else {
                    row.push(new Cell(this, i, j, Colors.WHITE, null)) //white
                }
            }
            this.cells.push(row)
        }
    }
    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }
    public hightLightCells(selectedCell: Cell | null | undefined){
        for (let i = 0; i < this.cells.length; i += 1) {
            const row = this.cells[i]
            for (let j = 0; j < this.cells.length; j += 1) {
                const target = row[j]
                this.cells[i][j].available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }
    public getCopyBoard(setBoard:any): void {
        const newBoard = new Board();
        newBoard.cells = this.cells
        setBoard(newBoard)
    }    
    private addBishop() {
        new Bishop(Colors.BLACK, this.getCell(2, 0))
        new Bishop(Colors.BLACK, this.getCell(5, 0))
        new Bishop(Colors.WHITE, this.getCell(2, 7))
        new Bishop(Colors.WHITE, this.getCell(5, 7))
    }
    private addKnight() {
        new Knight(Colors.BLACK, this.getCell(1, 0))
        new Knight(Colors.BLACK, this.getCell(6, 0))
        new Knight(Colors.WHITE, this.getCell(1, 7))
        new Knight(Colors.WHITE, this.getCell(6, 7))
    }
    private addRook() {
        new Rook(Colors.BLACK, this.getCell(7, 0))
        new Rook(Colors.BLACK, this.getCell(0, 0))
        new Rook(Colors.WHITE, this.getCell(0, 7))
        new Rook(Colors.WHITE, this.getCell(7, 7))
    }
    private addQueen() {
        new Queen(Colors.BLACK, this.getCell(3, 0))
        new Queen(Colors.WHITE, this.getCell(4, 7))
    }
    private addPawn() {
        for (let i = 0; i < 8; i += 1) {
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }
    private addKing() {
        new King(Colors.BLACK, this.getCell(4, 0))
        new King(Colors.WHITE, this.getCell(3, 7))
    }
    public addFigurs() {
        this.addBishop()
        this.addKing()
        this.addKnight()
        this.addPawn()
        this.addQueen()
        this.addRook()
    }
}