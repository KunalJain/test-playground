describe('test hilton homepage', () => {
	test('should verify title of the page', async () => {
		const page = (await browser.pages())[0]
		await page.goto('https://www.hilton.com/en/hilton-honors/');
		expect(await page.title()).toBe('Hilton Honors - A Hotel Rewards Program');
	});
});

describe('test find hotel button', () => {
	test('should verify find hotel button exists on the page', async () => {
		const page = (await browser.pages())[0]
		await page.goto('https://www.hilton.com/en/hilton-honors/');
		await page.waitForSelector('.dtqq1j-4 > .sc-8iog9o-0 > .sc-1rsk9xd-1 > .sc-1rsk9xd-0 > .sc-drlKqa');
		await page.click('.dtqq1j-4 > .sc-8iog9o-0 > .sc-1rsk9xd-1 > .sc-1rsk9xd-0 > .sc-drlKqa');
		await page.navigationPromise;
		expect(await page.title()).toBe('Find Hotels - Hilton');
	});
});