/* leetcode: 36. Valid Sudoku*/
var isValidSudoku = function(board) {
    let cols=new Map()
    let rows=new Map()
    let squares=new Map()

    for (let i = 0; i < 9; i++) {
        rows.set(i, new Set());
        cols.set(i, new Set());
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            squares.set(`${i}-${j}`, new Set());
        }
    }
    function checkCell(i, j) {
        if (i === 9) return true;
        if (j === 9) return checkCell(i + 1, 0);
        let n = board[i][j];
        if (n !== ".") {
            let s_key=`${Math.floor(i/3)}-${Math.floor(j/3)}`
            if(
                rows.get(i).has(n) ||
                cols.get(j).has(n) ||
                squares.get(s_key).has(n)
            ) return false
            rows.get(i).add(n)
            cols.get(j).add(n)
            squares.get(s_key).add(n)
        }
        return checkCell(i, j + 1);
    }
    return checkCell(0, 0)
};

/* leetcode: 37. Sudoku Solver */
var solveSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set())
    let cols = Array.from({ length: 9 }, () => new Set())
    let squares = Array.from({ length: 9 }, () => new Set())
    let emptyCells = []

    function boxIndex(i, j) {
        return Math.floor(i / 3) * 3 + Math.floor(j / 3)
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") emptyCells.push([i, j])
            else{
                let n = board[i][j]
                rows[i].add(n)
                cols[j].add(n)
                squares[boxIndex(i, j)].add(n)
            }
        }
    }

    function solve(index) {
        if (index === emptyCells.length) return true
        let [i, j] = emptyCells[index]
        let s_key = boxIndex(i, j)

        for(let n = 1; n <= 9; n++) {
            let ch=n.toString()
            if(
                !rows[i].has(ch) &&
                !cols[j].has(ch) &&
                !squares[s_key].has(ch)
            ) {
                board[i][j]=ch
                rows[i].add(ch)
                cols[j].add(ch)
                squares[s_key].add(ch)

                if(solve(index+1)) return true

                board[i][j]="."
                rows[i].delete(ch)
                cols[j].delete(ch)
                squares[s_key].delete(ch)
            }
        }
        return false
    }
    solve(0)
    return board
};


/* leetcode: 51. N-Queens */
var solveNQueens = function(n) {
    let col=new Set()
    let posDiagonal=new Set() //r+c
    let negDiagonal=new Set() //r-c
    let res=[]
    let board = Array(n).fill().map(
        () => Array(n).fill(".")
    )

    function solve(i){//i means row here
        if(i==n){
            copy=board.map(row => row.join(""))
            res.push(copy)
            return
        }
        for(let j=0;j<n;j++){//jmeans column here
            //skip the line
            if(
                col.has(j) ||
                posDiagonal.has(i+j) ||
                negDiagonal.has(i-j)
            )continue
            
            //add stuff
            col.add(j)
            posDiagonal.add(i+j)
            negDiagonal.add(i-j)

            board[i][j]="Q"

            solve(i+1)

            //clean up
            col.delete(j)
            posDiagonal.delete(i+j)
            negDiagonal.delete(i-j)
            board[i][j]="."
        }
    }
    solve(0)
    return res
};


/* leetcode: 79. Word Search */
var exist = function(board, word) {
    let row = board.length;
    let col = board[0].length;
    function dfs(r,c,i){
        if(i==word.length)return true
        if(
            r<0 ||
            c<0 ||
            r>=row ||
            c>=col ||
            word[i] !=board[r][c]
        ) return false
        let temp=board[r][c]
        board[r][c] = "#"
        let res=(
            dfs(r+1,c,i+1) ||
            dfs(r-1,c,i+1) ||
            dfs(r,c+1,i+1) ||
            dfs(r,c-1,i+1)
        )
        board[r][c]=temp
        return res
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(dfs(i,j,0))return true
        }
    }
    return false
};