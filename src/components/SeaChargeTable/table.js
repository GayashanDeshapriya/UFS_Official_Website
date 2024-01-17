import React from 'react'


function table({ TradeType, TariffCategory, TariffDesStandard, TariffDesNonStandard, TariffCode, UOM, ContrSize, CargoType, Slabs, Currency, Rate, VAT_applicable, VAT_prcentang, ValidForm, Remarks }) {

    return (

        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Trade Type</th>
                        <th>Tariff Category</th>
                        <th>Tariff Description (Standardized)</th>
                        <th>Tariff Description (Non-standarized/Misc)</th>
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
                    <tr>
                        <td>Export</td>
                        <td>BOL - B/L amendment fee</td>
                        <td>Bill of Lading amendment charge</td>
                        <td>actual as per shipping line</td>
                        <td>E2</td>
                        <td>Per Document</td>
                        <td>20 & 40</td>
                        <td>Dry - General/FAK</td>
                        <td>SINGLE</td>
                        <td>USD</td>
                        <td>140</td>
                        <td>Exempted</td>
                        <td>0%</td>
                        <td>1-Jun-23</td>
                        <td></td>
                        <td>At actuals from shipping line, minimum USD 140</td>
                    </tr>

                    <tr>
                        <td>Export</td>
                        <td>BOL - B/L fee</td>
                        <td>Bill of Lading issuance charge</td>
                        <td>Export BL fee</td>
                        <td>E3</td>
                        <td>Per Document</td>
                        <td>20 & 40</td>
                        <td>Dry - General/FAK</td>
                        <td>SINGLE</td>
                        <td>AED</td>
                        <td>575.00</td>
                        <td>Exempted</td>
                        <td>0%</td>
                        <td>1-Jun-23</td>
                        <td></td>
                        <td>At actuals from shipping line</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default table
