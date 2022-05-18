import React from "react";
import { queryAllByText, queryByText, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store";
import Home from "../Home";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

test('Rendering Homepage with React Testing Library', async () => {

    render(
        <BrowserRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </BrowserRouter>
    );

    expect(screen.getByTestId('selection-container')).toBeInTheDocument();
    expect(screen.getByTestId('selection-container').childElementCount).toBe(11);
    expect(screen.getByTestId('cpu')).toBeInTheDocument();

    screen.getByTestId('cpu').click();

    await new Promise((r) => setTimeout(r, 2000));

    screen.debug();

    //screen.debug();
});


test('Rendering Homepage with React Test Renderer', () => {

    const testRenderer = TestRenderer.create(
        <BrowserRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </BrowserRouter>
    );

    console.log(testRenderer.toJSON());
    const testInstance = testRenderer.root;

    // expect(queryByText(/motherboard/i)).toBeTruthy();
    // expect(queryByText(/motherboard/i)).toBeInTheDocument();

    // const array = testInstance.children.at(0).children;

    // console.log(array);

    //expect(array).toBe([Array]);
    //expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);

});


test('Homepage Snapshot Render Testing', () => {

    const tree = TestRenderer.create(
        <BrowserRouter>
            <Provider store={store}>
                <Home />
            </Provider>
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});