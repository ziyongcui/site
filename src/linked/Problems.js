import React from "react";
import { useTable, useFilters } from "react-table";
import Hero from '../components/Hero';
import Content from '../components/Content';
import Gamblers_Ruin from "../assets/problems/Gamblers_Ruin.pdf";
import Dobble from "../assets/problems/Dobble.pdf";
import Basketball from "../assets/problems/Basketball.pdf";
import Ngon from "../assets/problems/N-Gon.pdf";
import Divisibility from "../assets/problems/Divisibility.pdf";
import ShortBrainTeasers from "../assets/problems/ShortBrainTeasers.pdf";
import CoinProblems from "../assets/problems/CoinProblems.pdf";
import AestheticTree from "../assets/problems/AestheticTree.pdf";


function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter
    }),
    []
  );

  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter }
  }) {
    const count = preFilteredRows.length;

    return (
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} problems...`}
      />
    );
  }

  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes
    },
    useFilters
  );

  // Render the UI for your table
  return (
    <table
      {...getTableProps()}
      border={1}
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        {headerGroups.map((group) => (
          <tr {...group.getHeaderGroupProps()}>
            {group.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((group) => (
          <tr {...group.getFooterGroupProps()}>
            {group.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}

function Problems() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        Footer: "",
        columns: [
        {
            Header: "",
            accessor: "firstcolumn"
        }
        ]
      },
      {
        Header: "Category",
        Footer: "",
        columns: [
        {
            Header: "",
            accessor: "secondcolumn"
        }
        ]
      },
      {
        Header: "Difficulty",
        Footer: "",
        columns: [
        {
            Header: "",
            accessor: "thirdcolumn"
        }
        ]
      },
      {
        Header: "Date Added",
        Footer: "",
        columns: [
        {
            Header: "",
            accessor: "fourthcolumn"
        }
        ]
      }
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        firstcolumn: <a href={Dobble} download>Dobble/Spot It Problem</a>,
        secondcolumn: "Linear Algebra, Combinatorics",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 5.0",
        fourthcolumn: "07/01/2021"
      },
      {
        firstcolumn: <a href={Gamblers_Ruin} download>Gambler's Ruin Problem</a>,
        secondcolumn: "Conditional Probability",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 3.5",
        fourthcolumn: "07/01/2021"
      },
      {
        firstcolumn: <a href={Basketball} download>Basketball Problem</a>,
        secondcolumn: "Combinatorics, Counting",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 2.0",
        fourthcolumn: "07/02/2021"
      },
      {
        firstcolumn: <a href={Ngon} download>N-Gon Problem</a>,
        secondcolumn: "Combinatorics, Counting",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 4.5",
        fourthcolumn: "07/03/2021"
      },
      {
        firstcolumn: <a href={Divisibility} download>Divisbility Problem</a>,
        secondcolumn: "Number Theory",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 1.0",
        fourthcolumn: "07/22/2021"
      },
      {
        firstcolumn: <a href={ShortBrainTeasers} download>Short Brain Teasers</a>,
        secondcolumn: "Brainteasers, Distributions",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 3.5",
        fourthcolumn: "07/22/2021"
      },
      {
        firstcolumn: <a href={CoinProblems} download>Coin Problems</a>,
        secondcolumn: "Combinatorics, Probability",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 3.5",
        fourthcolumn: "07/22/2021"
      },
      {
        firstcolumn: <a href={AestheticTree} download>Aesthetic Tree Problem</a>,
        secondcolumn: "CS",
        thirdcolumn: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 2.5",
        fourthcolumn: "07/25/2021"
      }
    ],
    []
  );
  return <div>
      <Hero title="Problems" />

        <Content>
            <Table columns={columns} data={data} />

        </Content>
  </div>

}

export default Problems;