import {Text} from "./cellTypes/text";
import {cellTypeMapping} from "./cellTypeMapping";

const HeaderCell = ({width, children}) => {
    return <div className="header" style={{width: width ? `${width}px` : 'auto'}}>{children}</div>
}
const CellContainer = ({width, children}) => {
    return <div className="cell" style={{width: width ? `${width}px` : 'auto'}}>{children}</div>
}
export const FlexDataTable = ({data, columns}) => {
    return <div className="flex-table">
        <div className="row header-row">
            {columns.map((colItem, index) => {
                return <HeaderCell key={index} width={colItem.width}>{colItem.title}</HeaderCell>
            })}
        </div>
        {data.map((dataItem, index) => {
            return <div key={index} className="row">
                {columns.map((colItem, colIndex) => {
                    let Cell = Text
                    let value = dataItem;
                    if (colItem.dataKey) {
                        value = dataItem[colItem.dataKey]
                    }
                    if (colItem.type && cellTypeMapping[colItem.type]) {
                        Cell = cellTypeMapping[colItem.type]
                    }
                    return <CellContainer key={colIndex} width={colItem.width}>
                        <Cell value={value}/>
                    </CellContainer>
                })}
            </div>
        })}
    </div>
}