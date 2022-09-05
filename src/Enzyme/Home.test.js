import Home from './Home'
import {shallow} from 'enzyme'

describe.skip('Shallow testing',()=>{
    test('Object Test',()=>{
        let wrapper = shallow(<Home/>);
        console.log(wrapper.debug());
        expect(wrapper.exists('.home')).toEqual(true);
    })
    test('find Test',()=>{
        let wrapper = shallow(<Home/>);
        console.log(wrapper.debug());
        expect(wrapper.find('.one').length).toBe(1);
    })
    test('at & key Test',()=>{
        let wrapper = shallow(<Home/>);
        expect(wrapper.find('.one').at(0).key()).toBe("first");
    })
    test('child Test',()=>{
        let wrapper = shallow(<Home/>);
        expect(wrapper.find('.home').childAt(0).type()).toBe("div");
    })
    test('children Test',()=>{
        let wrapper = shallow(<Home/>);
        expect(wrapper.find('span').children().length).toBe(2);
    })
    test('class Test',()=>{
        let wrapper = shallow(<Home/>);
        expect(wrapper.find('.three').hasClass("third")).toBe(true);
    })
})