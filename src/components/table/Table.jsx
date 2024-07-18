import React from "react";
import { useTable, useGlobalFilter } from "react-table";
import { GPOUPED_COL } from "../columns";
import "./table.css";
import GlobalFilter from "../filter/GlobalFilter";
import Modal from "../modal/Modal";
import { getAllPerson } from "../../constants/utils/utils";
import { ALL_USERS } from "../../constants/utils/const";

const Table = () => {
  const [people, setPeople] = React.useState([]);
  const [modal, setModal] = React.useState(false);
  const [current, setCur] = React.useState([]);

  const getUsers = async () => {
    const res = await getAllPerson(ALL_USERS);
    setPeople(res.users);
  };
  React.useEffect(() => {
    getUsers();
  }, []);
  const idHandler = (id) => {
    if (id === current) setCur([]);
    setCur(id);

    setModal(true);
  };

  const columns = React.useMemo(() => GPOUPED_COL, []);
  const data = React.useMemo(() => people, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );
  const { globalFilter } = state;

  return (
    <div className="wrapper">
      <div className="search">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, id) => {
            prepareRow(row);
            return (
              <tr onClick={() => idHandler(id)} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        current={current}
        people={people}
        isOpen={modal}
        onClose={() => setModal(false)}
      />
    </div>
  );
};

export default Table;
