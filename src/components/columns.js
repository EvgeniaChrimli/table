export const COLUMNS = [
  {
    Header: "Number",
    accessor: "id",
  },
  {
    Header: "FirstName",
    accessor: "firstName",
  },
  {
    Header: "LastName",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Tel.number",
    accessor: "phone",
  },
  {
    Header: "City",
    accessor: "address.city",
  },
  {
    Header: "Street",
    accessor: "address.address",
  },
];

export const GPOUPED_COL = [
  {
    Header: "Number",
    accessor: "id",
  },
  {
    Header: "Full name",
    columns: [
      {
        Header: "FirstName",
        accessor: "firstName",
      },
      {
        Header: "LastName",
        accessor: "lastName",
      },
    ],
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Tel.number",
    accessor: "phone",
  },
  {
    Header: "Full adress",
    columns: [
      {
        Header: "City",
        accessor: "address.city",
      },
      {
        Header: "Street",
        accessor: "address.address",
      },
    ],
  },
];
