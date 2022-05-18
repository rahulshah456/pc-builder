import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BtnPrimary from "../../../components/Btn/BtnPrimary";
import { LogoInvert } from "../../../components/Logo";
import {
    invoiceTableBorderColor, invoiceTableHeaderBg, invoiceThemeColor,
    textThemeColor, textThemeColorInvert, whiteColor
} from "../../../core/color";
import { formatLocaleCurrency } from "../../../core/utils";


const InvoiceContainer = styled.div`
    background-color: ${whiteColor};
    border-radius: 0.5rem;
    padding: 4rem 0;
    margin: 3rem 3rem 3rem 0;
    min-height: 1000px;
    position: relative;
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

const InvoiceFooter = styled.div`
    padding: 4rem 2rem;
`;

const CostDisplay = styled.h1`
    font-family: 'Product Sans Black';
    font-size: 4rem;
`;

const GrandTotal = styled.div`
    padding-top: 0;
    margin: 0;

    p,h1 {
        padding: 0;
        margin: 0;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
`;



const generateInvoiceItems = (rigComponents) => {

    var items = [], count = 1;
    var subTotal = Number(0), selections = Number(0);

    for (const [key, value] of Object.entries(rigComponents)) {

        //format price to local currency
        const price = formatLocaleCurrency(value.price);
        const totalPrice = formatLocaleCurrency(value.qty * value.price);

        //calculate subtotal and selected components
        if (value.price != null) subTotal = subTotal + (value.qty * value.price);
        (value.isSelected) && selections++;

        //add components with price to invoice table
        items.push(
            <tr key={value.id}>
                <td>{count++}</td>
                <td>{value.header}</td>
                <td>{value.name}</td>
                <td>{value.price != null ? price : ''}</td>
                <td>{value.qty > 0 && value.qty}</td>
                <td>{value.price != null ? totalPrice : ''}</td>
            </tr>
        );
    }
    return { items, subTotal, selections };
}


const Invoice = () => {

    const rigComponents = useSelector((state) => state.components.RigComponents);
    const { items, subTotal, selections } = generateInvoiceItems(rigComponents);


    return (
        <InvoiceContainer>
            <ButtonsContainer>
                <BtnPrimary name="Print" />
                <BtnPrimary name="Save" />
            </ButtonsContainer>
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
                    {items}
                </ContentTable>
            </InvoiceBody>
            <InvoiceFooter>
                <p>Sub Total:&nbsp; &#8377;{formatLocaleCurrency(subTotal)}</p>
                <p>GST 18%:&nbsp; &#8377;{formatLocaleCurrency(subTotal * 0.18)}</p>
                <p>Components:&nbsp; {selections}</p>
                <GrandTotal>
                    <hr color={invoiceTableBorderColor} />
                    <p>GRAND TOTAL</p>
                    <CostDisplay>&#8377;{formatLocaleCurrency(subTotal + (subTotal * 0.18))}</CostDisplay>
                </GrandTotal>
            </InvoiceFooter>
        </InvoiceContainer>
    );
}

export default Invoice;