import { FC, useEffect, useState } from 'react'
import { Board } from '../Models/Board'
import { Fragment } from 'react'
import CellComponent from './CellComponent'
import { Cell } from '../Models/Cell'
type BoardProps = {
	board: Board
	setBoard: (board: Board) => void
}
const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>()
	const [currentColor, setCurrentColor] = useState<string | null>(null)
	const booleanSelected = (cell : Cell, selectedCell: Cell | null | undefined) : boolean=>{
		return cell.x === selectedCell?.x && cell.y === selectedCell?.y
	}
	const click = (cell: Cell) => {
		if(!cell.figure)return
		setSelectedCell(cell)
		setCurrentColor(cell?.figure.color)
	}
	useEffect(()=>{
		highLightCells()
	}, [selectedCell])
	const highLightCells = ()=>{
		board.hightLightCells(selectedCell)
		updateBoard()
	}
	const updateBoard = ()=>{
		board.getCopyBoard(setBoard)
	}	
	return (
		<div className='board'>
			{board.cells.map((row, index) => (
				<Fragment key={index}>
					{row.map(cell => (
						<CellComponent color={currentColor} click={click} cell={cell} key={cell.id} selected={booleanSelected(cell, selectedCell)} />
					))}
				</Fragment>
			))}
		</div>
	)
}

export default BoardComponent
