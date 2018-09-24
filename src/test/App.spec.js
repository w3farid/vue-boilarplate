import { mount, createLocalVue } from '@vue/test-utils'
import App from '../App'

test('App has h1 tag', () => {
	const vue = createLocalVue()
	const app = mount (App, {vue})

	const h1 = app.find('h1')
	expect(h1.is('h1')).toBe(true)
})