import { h } from "preact"
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { mount } from 'enzyme';

import { Header } from '../src/Layout';
import { AppContext } from '../src/AppContextProvider';

describe('Header component', () => {
	test('Header toggle darkMode', () => {
		const state = {darkMode: true, toggleDarkMode: () => {state.darkMode = !state.darkMode;}};
		const context = mount(<AppContext.Provider value={state}><Header /></AppContext.Provider>);
		const toggle = context.find('wired-toggle');

		expect(toggle.props().checked).toBe(true);

		toggle.simulate('change');
		toggle.update();

		expect(state.darkMode).toBe(false);

		toggle.simulate('change');
		toggle.update();

		expect(state.darkMode).toBe(true);
	});
});
