import { configure } from 'enzyme';
// This is to fix import wired-toggle webcomponent transform error
import 'regenerator-runtime/runtime'
import Adapter from 'enzyme-adapter-preact-pure';

configure({
	adapter: new Adapter()
});
