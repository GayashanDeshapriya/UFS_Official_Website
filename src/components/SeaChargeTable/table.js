import React, { useEffect, useState } from 'react';

function DisplayTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/SeaContainerData.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Trade Type</th>
                        <th>Tariff Category</th>
                        <th>Tariff Description (Standardized)</th>
                        <th>Tariff Description (Non-standardized/Misc)</th>
                        <th>Tariff Code</th>
                        <th>UOM</th>
                        <th>Contr Size</th>
                        <th>Cargo Type</th>
                        <th>Slabs (Single/Multiple)</th>
                        <th>Currency</th>
                        <th>Rate</th>
                        <th>VAT Applicable</th>
                        <th>VAT %age</th>
                        <th>Valid From</th>
                        <th>Valid To</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.TradeType}</td>
                            <td>{item.TariffCategory}</td>
                            <td>{item.TariffDesStandard}</td>
                            <td>{item.TariffDesNonStandard}</td>
                            <td>{item.TariffCode}</td>
                            <td>{item.UOM}</td>
                            <td>{item.ContrSize}</td>
                            <td>{item.CargoType}</td>
                            <td>{item.Slabs}</td>
                            <td>{item.Currency}</td>
                            <td>{item.Rate}</td>
                            <td>{item.VAT_applicable}</td>
                            <td>{item.VAT_percent}</td>
                            <td>{item.ValidForm}</td>
                            <td>{item.ValidTo}</td>
                            <td>{item.Remarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayTable;
