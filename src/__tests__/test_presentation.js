'use strict';
import expect from 'expect';
import React from 'react';
import Presentation from '../presentation';
import ReactTestUtils from 'react/lib/ReactTestUtils';


describe("A passing test case", () => {
    it("should pass", () => {
        expect(2 === 2).toEqual(true);
    });
});

describe("The Presentation component", () => {
    let presentation_component;

    beforeEach(() => {
        presentation_component =
            <Presentation className="custom_class">
                <section>Slide 1</section>
                <section>Slide 2</section>
            </Presentation>
    });

    it("Should render into the DOM", () => {
        var root = ReactTestUtils.renderIntoDocument(
            presentation_component
        );
        expect(root).toExist();
    });

    it('should render using its appropriate className', () => {
        var root = ReactTestUtils.renderIntoDocument(
            presentation_component
        );
        expect(presentation_component.props.className).toEqual('custom_class');
        console.log(root);
    })
});