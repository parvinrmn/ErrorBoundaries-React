import React, { Component } from 'react'

export default class Table extends Component {
    removeRow(e){
        console.log(e.target)
        e.target.parentElement.remove();
    }
    render() {
        // const  dataTitle  = this.props.dataTitle;
        const { dataTitle } = this.props;
        const { dataName } = this.props;
        const { dataSource } = this.props;
        const { dataColumns } = this.props;

        // console.log(dataSource)

        return (
            <>
               
                <table id={dataName} style={{ direction: 'rtl' }} border={1} align='center' width='100%'>
                    <caption>{dataTitle}</caption>

                    <thead>
                        <tr>
                            {
                                dataColumns.map(
                                    (col, index) => {
                                        return <th key={`${col.name}_${index}`}>{col.title}</th>
                                    }
                                )
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {
                            dataSource.map(
                                (row, rowIndex) => {
                                    return (
                                        <tr key={`${dataName}_data_${rowIndex}`}>
                                            {
                                                dataColumns.map(
                                                    (col, colIndex) => {
                                                         console.log(`row.${col.name}`)
                                                        return (
                                                            <td key={`${dataName}_data_${rowIndex}_${col.name}`}>
                                                                {
                                                                    // row[col.name]
                                                                    eval(`row.${col.name}`)
                                                                }
                                                            </td>
                                                        )
                                                    }
                                                )
                                            }<td onClick={this.removeRow}>X</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>

                </table>

            </>
        )
    }
}