import React from "react";
import renderer from 'react-test-renderer';
import { HashRouter as Router } from "react-router-dom";
import Nav from "../components/Nav";
import '@testing-library/jest-dom';


describe('Test of Nav', () => {
    it('test if Header is rendered', () => {
        const headerTest = renderer
            .create(<Router><Nav /></Router>)
            .toJSON();
        expect(headerTest).toMatchSnapshot();
    });
});