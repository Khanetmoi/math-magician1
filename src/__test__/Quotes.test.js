import React from "react";
import renderer from 'react-test-renderer';
import Quotes from "../components/Quotes";
import '@testing-library/jest-dom';

describe('Test of Quote page', () => {
    it('test if Quote page is rendered', () => {
        const quoteTest = renderer
            .create(<Quotes />)
            .toJSON();
        expect(quoteTest).toMatchSnapshot();
    });
});