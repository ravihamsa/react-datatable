import './styles.css';
import {Text} from "./cellTypes/text";
import {cellTypeMapping} from "./cellTypeMapping";

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

