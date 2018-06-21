import React from 'react';
import Enzyme, {
    mount
} from 'enzyme';
import Demo from '../src/reactDemo';
import Adapter from 'enzyme-adapter-react-16';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';
Enzyme.configure({
    adapter: new Adapter()
});

describe("UI test ", () => {
    it("should have title", () => {
        const wrapper = mount( < Demo / > )
        const title = wrapper.find('h1');
        expect(title).toHaveLength(1);
        expect(title.text()).toBe('this is a react demo')
    })

    it("should add 1 when button click", () => {
        const wrapper = mount( < Demo / > )
        const counter = wrapper.find('.counter')
        const v1 = parseInt(counter.text());            
        wrapper.find('button').simulate('click');
        const v2 = parseInt(counter.text());
        expect(v1+1).toBe(v2)
    })

    it("should change when input change", () => {
        const wrapper = mount( < Demo / > )
        const counter = wrapper.find('.counter')
        wrapper.find('input').simulate('change',{
            target:{
                value:'5'
            }
        });
        const v1 = parseInt(counter.text());
        expect(v1).toBe(5)
    })

})