import {DataTable} from "./dataTable/DataTable";
import {bidSheetList} from "./data/tableData"
import {FlexDataTable} from "./dataTable/FlexDataTable";


const columns = [
    {title: 'Product', type: 'product', width: 300},
    {
        title: 'Manufacturer',
        type: 'manufacturer',
        width: 200
    },
    {
        title: 'Pack/Size',
        type: 'pack',
        width: 100
    }
]

function App() {
    return (
        <div>
            <FlexDataTable data={bidSheetList} columns={columns}/>
            <DataTable data={bidSheetList} columns={columns}/>
        </div>
    );
}

export default App;
