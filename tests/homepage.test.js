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
	    await page.waitForSelector('[href="https://secure3.hilton.com/en_US/hh/customer/login/index.htm"]')
        await page.click('[href="https://secure3.hilton.com/en_US/hh/customer/login/index.htm"]')
		expect(await page.title()).toBe('Sign In - Hilton Honors');
        await page.waitFor(1000);
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
      await page.click('[data-e2e="findHotel"]');
      await page.waitFor(10000);
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
      await page.waitForSelector('[data-e2e="standardPriceBookCTA"]');
      getFirstElement = await page.$$('[data-e2e="standardPriceBookCTA"]');
      await getFirstElement[0].click();
      await page.waitFor(2000);
      await page.waitForSelector('[class="FormButtonstyles__FormSubmitButton-sc-1moeqoj-0 PaymentForm__BookButton-i43r5q-2 kHSleL"]');
      expect(await page.title()).toBe('Payment - Embassy Suites by Hilton Tuscaloosa Alabama Downtown');

	});
});
