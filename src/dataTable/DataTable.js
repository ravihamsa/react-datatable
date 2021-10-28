import './styles.css';
import {Manufacturer} from "./cellTypes/manufacturer";
import {Text} from "./cellTypes/text";
import {Product} from "./cellTypes/product";
import {Pack} from "./cellTypes/pack";

export const cellTypeMapping = {
    manufacturer: Manufacturer,
    product: Product,
    pack: Pack,
}

export const DataTable = ({data, columns}) => {
    return <table>
        <thead>
        <tr>
            {columns.map((colItem, index) => {
                return <th key={index}>{colItem.title}</th>
            })}
        </tr>
        </thead>
        <tbody>
        {data.map((dataItem, index) => {
            return <tr key={index}>
                {columns.map((colItem, colIndex) => {
                    let Cell = Text
                    let value = dataItem;
                    if (colItem.dataKey) {
                        value = dataItem[colItem.dataKey]
                    }
                    if (colItem.type && cellTypeMapping[colItem.type]) {
                        Cell = cellTypeMapping[colItem.type]
                    }
                    return <td key={colIndex}>
                        <Cell value={value}/>
                    </td>
                })}
            </tr>
        })}
        </tbody>
    </table>
}

