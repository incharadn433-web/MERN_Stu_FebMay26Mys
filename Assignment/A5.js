// Employee records
Employee = [
    {name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.10 },
    {name: "Inchu", basePay: 25000, bonus: 1000, taxRate: 0.2}
];
const validRecords= Employee.filter((n => n.basePay>=0 && n.taxRate>=0 && n.taxRate<=1));
 const netPayReport = validRecords.map(n => {
  const gross = n.basePay + n.bonus;
  return  gross - (gross * n.taxRate);
 });
 const totalNetPayout = netPayReport.reduce(
(total, n) => total + n,0);
  console.log(validRecords);
  console.log(netPayReport);
  console.log(totalNetPayout);



     