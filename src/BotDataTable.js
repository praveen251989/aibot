import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./css/datatables.css";
import "datatables.net";
import "datatables.net-buttons";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";
import "jszip";
import "pdfmake";
import "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";
export const BotDataTable = ({ tableData }) => {
	const [columns, setColumns] = useState([]);
	const [data, setData] = useState([]);
	useEffect(() => {
		if (tableData.length > 0) {
			const colNames = Object.keys(tableData[0]);
			setColumns(colNames);
			setData(tableData);
		}
	}, [tableData]);
	useEffect(() => {
		if (data.length > 0 && columns.length > 0) {
			if ($.fn.DataTable.isDataTable("#botTable")) {
				$("#botTable").DataTable().destroy();
			}
			$("#botTable").DataTable({
				dom: "Bfrtip",
				buttons: [
					{ extend: "copy", text: "Copy" },
					{ extend: "csv", text: "Export CSV" },
					{ extend: "excel", text: "Export Excel" },
					{ extend: "pdf", text: "Export PDF" },
					{ extend: "print", text: "Print" },
				],
				responsive: true,
				autoWidth: false,
			});
		}
	}, [data, columns]);
	return (
		<div>
			<table id="botTable" className="display">
				<thead>
					<tr>
						{columns.map((col, index) => (
							<th key={index}>{col}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map((col, colIndex) => (
								<td key={colIndex}>{row[col]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
