interface CellProps {
    cell: string,
    id: number,
    go: string,
    setGo: React.Dispatch<React.SetStateAction<string>>,
    cells: string[]
    setCells: React.Dispatch<React.SetStateAction<string[]>>,
    winningMessage: string
}


const Cell = ( {cell, id, go, setGo, cells, setCells, winningMessage} : CellProps ) => {

    const handleClick = (e : React.MouseEvent) => {
        if(winningMessage) return;
        
        const target = e.currentTarget;
        const child = target.firstElementChild as HTMLElement | null;

        const taken = child?.classList.contains("circle") || child?.classList.contains("cross");

        if (!taken && go === "circle") {
            child?.classList.add("circle");
            handleCellChange("circle");
            setGo("cross");
        }
        if (!taken && go === "cross") {
            child?.classList.add("cross");
            handleCellChange("cross");
            setGo("circle");
        }
    }

    const handleCellChange = (className : string) => {
        const cellsUpdate = cells.map((cell, index) => {
            if(index === id) {
                return className;
            } 
            else {
                return cell;
            }
        })

        setCells(cellsUpdate);
        console.log(cells);
    }

    return(
        <div className="square" id={"id" + id} onClick={handleClick}>
            <div className={cell}>
                
            </div>
        </div>
    )
}

export default Cell;