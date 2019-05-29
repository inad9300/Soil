import {h} from '@soil/dom'

export type ColDef<R> = {
    headerCell(): h.Th
    bodyCell(row: R): h.Td
    bodyCellUpdate?(row: R, cell: h.Td): void
    footerCell?(data: R[]): h.Td
    // TODO?
    // pin?: 'left' | 'right'
    // position?: number
    // hide?: boolean
    // sort?: 0 | 1 | 2 | 3
    // sortFn?(): -1 | 0 | 1
    // filterFn?(): boolean
}

export const table = <R> (colDefs: ColDef<R>[]) => {

    colDefs.forEach(colDef => {
        if (!colDef.bodyCellUpdate) {
            colDef.bodyCellUpdate = (row, cell) =>
                cell.parentElement!.replaceChild(colDef.bodyCell(row), cell)
        }
    })

    const $tbody = h.tbody({}, [])
    const $tfootRow = h.tr({})

    const $self = h.table({}, [
        h.thead({}, [
            h.tr({}, colDefs.map(colDef => colDef.headerCell()))
        ]),
        $tbody,
        h.tfoot({}, [
            $tfootRow
        ])
    ])

    function update(data: R[]): void {
        const trs = Array.from($tbody.rows)

        if (trs.length > data.length) {
            let lastIdx: number = -1
            data.forEach((row, rowIdx) => {
                Array.from(trs[rowIdx].cells).forEach((td, tdIdx) => {
                    colDefs[tdIdx].bodyCellUpdate!(row, td)
                })
                lastIdx = rowIdx
            })
            for (let i = lastIdx + 1; i < trs.length; ++i) {
                trs[i].remove()
            }
        } else if (trs.length < data.length) {
            let lastIdx: number = -1
            trs.forEach((tr, trIdx) => {
                Array.from(tr.cells).forEach((td, tdIdx) => {
                    colDefs[tdIdx].bodyCellUpdate!(data[trIdx], td)
                })
                lastIdx = trIdx
            })
            for (let i = lastIdx + 1; i < data.length; ++i) {
                $tbody.appendChild(
                    h.tr({}, colDefs.map(colDef => colDef.bodyCell(data[i])))
                )
            }
        } else {
            trs.forEach((tr, trIdx) => {
                Array.from(tr.cells).forEach((td, tdIdx) => {
                    colDefs[tdIdx].bodyCellUpdate!(data[trIdx], td)
                })
            })
        }

        $tfootRow.innerHTML = ''
        colDefs.map(colDef => {
            $tfootRow.appendChild(colDef.footerCell
                ? colDef.footerCell(data)
                : h('td'))
        })
    }

    return Object.assign($self, {update})
}
