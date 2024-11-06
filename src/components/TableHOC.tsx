import { TbSortAscending } from "react-icons/tb";
import { Column, TableOptions, usePagination, useSortBy, useTable } from "react-table"

const TableHOC = <T extends object,>(
    columns: Column<T>[],
    data: T[],
    containerClassName: string,
    heading: string,
    isPagination: boolean = false,
) => {

    return function HOC() {
        const options: TableOptions<T> = {
            columns,
            data,
            initialState: {
                pageSize: 6,
            }
        };
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            page,
            prepareRow,
            nextPage,
            previousPage,
            pageCount,
            gotoPage,
            canNextPage,
            canPreviousPage,
            state: { pageIndex }
        } = useTable(options, useSortBy, usePagination);

        return (
            <div className={containerClassName}>
                <h2 className="heading">{heading}</h2>

                <div className="table-box">
                    <table className="table" {...getTableProps()}>
                        <thead>
                            {
                                headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((header: any) => (
                                                <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                                                    {header.render("Header")}
                                                    {" "}
                                                    {header.isSorted && <span><TbSortAscending /></span>}
                                                </th>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                page.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr >
                                            {
                                                row.cells.map(cell => (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render("Cell")}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        isPagination &&                     
                        <div className="pagination-box">
                            <button
                                onClick={previousPage}
                                disabled={!canPreviousPage}
                            >
                                prev
                            </button>

                            <span>
                                {`${pageIndex + 1} of ${pageCount}`}
                            </span>

                            <button
                                onClick={nextPage}
                                disabled={!canNextPage}
                            >
                                next
                            </button>
                        </div>
                    }
                </div>
                
            </div>
        )
    }
}

export default TableHOC