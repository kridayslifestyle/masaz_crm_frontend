import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportReportPdf = (
  summary: any,
  stores: any[],
  selectedMonth: string
) => {

  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text(
    `Monthly Report ${selectedMonth}`,
    15,
    20
  );

  doc.setFontSize(14);

  doc.text(
    `Total Revenue: ₹${summary.total_revenue}`,
    15,
    40
  );

  doc.text(
    `Company Share: ₹${summary.company_share}`,
    15,
    50
  );

  doc.text(
    `Store Share: ₹${summary.store_share}`,
    15,
    60
  );

  autoTable(doc, {
    startY: 80,

    head: [[
      "Store",
      "City",
      "Chairs",
      "Gross",
      "Company",
      "Store Share",
    ]],

    body: stores.map((store) => [
      store.store,
      store.city,
      store.chairs,
      store.gross,
      store.company,
      store.partner,
    ]),
  });

  doc.save(
    `Monthly_Report_${selectedMonth}.pdf`
  );
};