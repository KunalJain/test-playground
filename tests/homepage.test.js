//describe('test hilton homepage', () => {
//	test('should verify title of the page', async () => {
//		const page = (await browser.pages())[0]
//		await page.goto('https://www.hilton.com/en/hilton-honors/');
//		expect(await page.title()).toBe('Hilton Honors - A Hotel Rewards Program');
//	});
//});
//
//describe('test find sign-in button', () => {
//	test('should verify user can navigate to sign-in page', async () => {
//		const page = (await browser.pages())[0]
//		await page.goto('https://www.hilton.com/en/hilton-honors/');
//	    await page.waitForSelector('.sc-hEsumM > .sc-feJyhm > .sc-caSCKo > .sc-fAjcbJ > .sc-TOsTZ:nth-child(3)')
//        await page.click('.sc-hEsumM > .sc-feJyhm > .sc-caSCKo > .sc-fAjcbJ > .sc-TOsTZ:nth-child(3)')
//        await page.navigationPromise;
//		expect(await page.title()).toBe('Sign In - Hilton Honors');
//	});
//});

describe('test user can pay for the room', () => {
	test('should verify payment screen loads', async () => {
      const page = (await browser.pages())[0]
      await page.goto('https://www.hilton.com/en/hilton-honors/');

      await page.waitForSelector('#search-input-box');
      await page.type('#search-input-box', "Tuscaloosa");
      await page.waitFor(10000);
      await page.click('.sc-gqjmRU > .sc-dxZgTM > .gBdnPR');
      await page.waitFor('.search-pagestyles__ListViewPanel-sc-1r1woml-14 > .fMSvgG');
      expect(await page.title()).toBe('Hotel Search - Hilton');
	});
});
