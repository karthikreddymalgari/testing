import SimulateDive from './SimulateDive'
import {shallow} from 'enzyme'

describe.skip('State testing',()=>{
    test('Object Test',()=>{
        let wrapper = shallow(<SimulateDive/>);
        expect(wrapper.state()).toEqual({Name:"karthik",Age:25,Count:0});
    })
    test('Click count',()=>{
        let wrapper = shallow(<SimulateDive/>);
        wrapper.find('button').simulate("click");
        expect(wrapper.find('.count1').length).toEqual(1);
    })
})

