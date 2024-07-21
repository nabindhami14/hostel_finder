import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const defaultData = [
  {
    customer_id: "C001",
    customer_name: "John Doe",
    customer_email: "john.doe@example.com",
    hostel_id: "H001",
    hostel_name: "Happy Stay Hostel",
    room_type: "Single",
    price: 500,
    date_of_booking: "2024-06-01",
    check_in_date: "2024-07-01",
    monthly_rate: 1500,
    booking_status: "Confirmed",
    payment_status: "Paid",
  },
  {
    customer_id: "C002",
    customer_name: "Jane Smith",
    customer_email: "jane.smith@example.com",
    hostel_id: "H002",
    hostel_name: "Cozy Corner Hostel",
    room_type: "Double",
    price: 600,
    date_of_booking: "2024-06-15",
    check_in_date: "2024-07-05",
    monthly_rate: 1800,
    booking_status: "Pending",
    payment_status: "Unpaid",
  },
  {
    customer_id: "C003",
    customer_name: "Alice Johnson",
    customer_email: "alice.johnson@example.com",
    hostel_id: "H003",
    hostel_name: "Traveler's Haven",
    room_type: "Dormitory",
    price: 450,
    date_of_booking: "2024-06-20",
    check_in_date: "2024-07-10",
    monthly_rate: 1400,
    booking_status: "Cancelled",
    payment_status: "Partially Paid",
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("customer_id", {
    header: "Customer ID",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("customer_name", {
    header: "Customer Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("customer_email", {
    header: "Customer Email",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("hostel_id", {
    header: "Hostel ID",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("hostel_name", {
    header: "Hostel Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("room_type", {
    header: "Room Type",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("date_of_booking", {
    header: "Date of Booking",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("check_in_date", {
    header: "Check-in Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("monthly_rate", {
    header: "Monthly Rate",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("booking_status", {
    header: "Booking Status",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("payment_status", {
    header: "Payment Status",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

function BookingsTable() {
  const [data] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table className="border">
        <thead className="border">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border px-2 font-semibold">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border px-2">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingsTable;
