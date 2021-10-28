import './manufacturer.styles.css'

export const Manufacturer = ({value}) => {
    let toReturn = '--'
    if (value.manufacturer?.fields) {
        toReturn = value.manufacturer?.fields?.name
    } else if (value.manufacturer) {
        toReturn = value.manufacturer.name
    } else if (value.display_distributor) {
        toReturn = value.display_distributor.fields.name
    }

    return <span className="manufacturer">{toReturn}</span>

}