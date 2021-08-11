import Settlement from "./settlement";
import Summary from "./summary" 

const SettlementRouting: any[] = [
    {
      path: '/dashboard/settlements/settlements',
      component: Settlement,
      exact: true,
      key: "Settlement",
  
    },
    {
      path: '/dashboard/settlements/summary',
      component: Summary,
      exact: true,
      key: "Summary",
  
    }
]
export default SettlementRouting;