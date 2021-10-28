import './product.styles.css'

export const Product = ({value}) => {
    return <div>
        <div className="product">{value.name}</div>
        <div className="sku">
            {value.vendor_item_reference && <span>SKU: {value.vendor_item_reference}</span>}
        </div>
    </div>
}