describe('test hilton homepage', () => {
	test('should verify title of the page', async () => {
		const page = (await browser.pages())[0]
		await page.goto('https://www.hilton.com/en/hilton-honors/');
		expect(await page.title()).toBe('Hilton Honors - A Hotel Rewards Program');
	});
});

describe('test find sign-in button', () => {
	test('should verify user can navigate to sign-in page', async () => {
		const page = (await browser.pages())[0]
		await page.goto('https://www.hilton.com/en/hilton-honors/');
	    await page.waitForSelector('.sc-hEsumM > .sc-feJyhm > .sc-caSCKo > .sc-fAjcbJ > .sc-TOsTZ:nth-child(3)')
        await page.click('.sc-hEsumM > .sc-feJyhm > .sc-caSCKo > .sc-fAjcbJ > .sc-TOsTZ:nth-child(3)')
        await page.navigationPromise;
		expect(await page.title()).toBe('Sign In - Hilton Honors');
	});
});

describe('test user can pay for the room', () => {
	test('should verify payment screen loads', async () => {
      const page = (await browser.pages())[0]
      page.setDefaultTimeout(20000);

      await page.goto('https://www.hilton.com/en/hilton-honors/');

      await page.waitForSelector('#search-input-box');
      await page.type('#search-input-box', "Tuscaloosa, AL");
      await page.waitFor(10000);
      await page.click('[class="sc-drlKqa sc-1rsk9xd-2 gZGhQU"]');
      await page.waitFor('[class="search-pagestyles__ListViewPanel-sc-1r1woml-14 fMSvgG"]');
      expect(await page.title()).toBe('Hotel Search - Hilton');

      await page.waitFor(10000);
      let getFirstElement = await page.$$('[class="cta-button-primary__CTAButtonPrimary-sc-1odsntg-0 ieoKmA"]');
      await getFirstElement[0].click();
      await page.waitFor(10000);
      expect(await page.title()).toBe('Available Rooms - Embassy Suites by Hilton Tuscaloosa Alabama Downtown');

      getFirstElement = await page.$$('[class="MoreRatesButtonstyles__MoreRates-sc-1eyzhlz-1 kWWaFg"]');
      await getFirstElement[0].click();
      await page.waitFor(10000);
      expect(await page.title()).toBe('Rates - Embassy Suites by Hilton Tuscaloosa Alabama Downtown');

      await page.waitFor(20000);
      await page.waitForSelector('[class="RateTableItemstyles__CTAwrapper-wdgpu0-7 giDwMX"]');
      getFirstElement = await page.$$('[class="RateTableItemstyles__CTAwrapper-wdgpu0-7 giDwMX"]');
      await getFirstElement[0].click();
      await page.waitFor(2000);


//      await page.waitForSelector('[class="FormButtonstyles__FormSubmitButton-sc-1moeqoj-0 PaymentForm__BookButton-i43r5q-2 kHSleL"]');
//      expect(await page.title()).toBe('Rates - Embassy Suites by Hilton Tuscaloosa Alabama Downtown');

	});
});
