import {h} from '@soil/dom'
import {table, ColDef} from './table'

type DataRow = {
    text: string
    count: number
}

const colDefs: ColDef<DataRow>[] = [{
    headerCell: () => h.th({}, ['Text']),
    bodyCell: row => h.td({}, [row.text]),
    bodyCellUpdate: (row, cell) => cell.textContent = row.text
}, {
    headerCell: () => h.th({}, ['Count']),
    bodyCell: row => h.td({}, ['' + row.count]),
    bodyCellUpdate: (row, cell) => cell.textContent = '' + row.count,
    footerCell: data => h.td({}, [
        '' + data.map(row => row.count).reduce((a, b) => a + b, 0)
    ])
}]

const $table = table(colDefs)

document.body.appendChild($table)

const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

setInterval(() => {
    $table.update(
        Array(rdnInt(5, 25)).fill(0).map(() => ({
            text: Math.random().toString(36).substr(2),
            count: Math.random()
        }))
    )
}, 256)
