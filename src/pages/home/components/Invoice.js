import { useSelector } from "react-redux";
import styled from "styled-components";
import { LogoInvert } from "../../../components/Logo";
import { invoiceTableBorderColor, invoiceTableHeaderBg, invoiceThemeColor, 
    textThemeColor, textThemeColorInvert, whiteColor } from "../../../core/color";


const InvoiceContainer = styled.div`
    background-color: ${whiteColor};
    border-radius: 0.5rem;
    padding: 4rem 0;
    margin: 3rem 3rem 3rem 0;
    min-height: 1000px;
    background-color: ${invoiceThemeColor};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const InvoiceHeader = styled.div`
    padding: 0;
    margin: 0;
`;

const InvoiceBody = styled.div`
    padding: 4rem 2rem;
`;

const ContentTable = styled.table`
    border: 1px solid ${invoiceTableBorderColor};
    border-collapse: collapse;
    width: 100%;

    th {
        background-color: ${invoiceTableHeaderBg};
        color: ${textThemeColorInvert};
    }

    th, td {
        border: 1px solid ${invoiceTableBorderColor};
        border-collapse: collapse;
        padding: 0.5rem 1rem; 
    }
`;


const generateInvoiceItems = (rigComponents) => {
    var items = [], count = 1;
    console.log(rigComponents);
    rigComponents.forEach((value, key) => {
        items.push(
            <tr>
                <td>{ count++ }</td>
                <td>{ value.header }</td>
                <td>{ value.name }</td>
                <td>{ value.price }</td>
                <td>{ value.qty }</td>
                <td>{ value.qty * value.price }</td>
            </tr>
        );
    });
    return items;
}


const Invoice = () => {

    const rigComponents = useSelector((state) => state.components.RigComponents);

    return (
        <InvoiceContainer>
            <InvoiceHeader>
                <LogoInvert color={textThemeColor} />
            </InvoiceHeader>
            <InvoiceBody>
                <ContentTable>
                    <tr>
                        <th>S.No.</th>
                        <th>Component</th>
                        <th>Selection</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    { generateInvoiceItems(rigComponents) }
                </ContentTable>
            </InvoiceBody>
        </InvoiceContainer>
    );
}

export default Invoice;