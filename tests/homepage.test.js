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
      await page.goto('https://www.hilton.com/en/hilton-honors/');
    
      await page.waitForSelector('.sc-1rsk9xd-0 > .tnvyj2-0 > .tnvyj2-1 > .sc-14o3w75-0:nth-child(1) > .sc-14o3w75-1')
      await page.click('.sc-1rsk9xd-0 > .tnvyj2-0 > .tnvyj2-1 > .sc-14o3w75-0:nth-child(1) > .sc-14o3w75-1')
    
      await page.waitForSelector('.sc-1rsk9xd-0 > .tnvyj2-0 > .tnvyj2-1 > .sc-14o3w75-0:nth-child(3) > .sc-14o3w75-1')
      await page.click('.sc-1rsk9xd-0 > .tnvyj2-0 > .tnvyj2-1 > .sc-14o3w75-0:nth-child(3) > .sc-14o3w75-1')
    
      await page.waitForSelector('.dtqq1j-4 > .sc-8iog9o-0 > .sc-1rsk9xd-1 > .sc-1rsk9xd-0 > .sc-drlKqa')
      await page.click('.dtqq1j-4 > .sc-8iog9o-0 > .sc-1rsk9xd-1 > .sc-1rsk9xd-0 > .sc-drlKqa')
    
      await page.waitForSelector('.dtqq1j-4 > .sc-8iog9o-0 > .sc-1rsk9xd-1 > .sc-1rsk9xd-0 > .sc-drlKqa')
      await page.click('.dtqq1j-4 > .sc-8iog9o-0 > .sc-1rsk9xd-1 > .sc-1rsk9xd-0 > .sc-drlKqa')
    
      await page.navigationPromise;
    
      await page.waitForSelector('.list-viewstyles__StyledUnorderedListView-sc-1sxsgka-0 > .hotel-cardstyles__HotelCardAndAvailabilityContainer-m5iqgu-7:nth-child(1) > .hotel-cardstyles__HotelCardWrapper-m5iqgu-3 > .hotel-cardstyles__CardContentWrapper-m5iqgu-6 > .cta-button-primary__CTAButtonPrimary-sc-1odsntg-0')
      await page.click('.list-viewstyles__StyledUnorderedListView-sc-1sxsgka-0 > .hotel-cardstyles__HotelCardAndAvailabilityContainer-m5iqgu-7:nth-child(1) > .hotel-cardstyles__HotelCardWrapper-m5iqgu-3 > .hotel-cardstyles__CardContentWrapper-m5iqgu-6 > .cta-button-primary__CTAButtonPrimary-sc-1odsntg-0')
    
      await page.navigationPromise;
    
      await page.waitForSelector('.RoomTiles__Tiles-sc-192rihq-2 #roomMoreRatesButtonD2')
      await page.click('.RoomTiles__Tiles-sc-192rihq-2 #roomMoreRatesButtonD2')
    
      await page.waitForSelector('.RateTableRowstyles__RateCell-sc-1use1n3-0:nth-child(3) > .SelectedItem__Wrapper-sc-1mqp5vi-0 > .SelectedItem__ChildWrapper-sc-1mqp5vi-1 > .RateTableItemstyles__RateTableBox-wdgpu0-0 > .RateTableItemstyles__CTAwrapper-wdgpu0-7 > .Buttonstyles__Button-lbs3hp-0')
      await page.click('.RateTableRowstyles__RateCell-sc-1use1n3-0:nth-child(3) > .SelectedItem__Wrapper-sc-1mqp5vi-0 > .SelectedItem__ChildWrapper-sc-1mqp5vi-1 > .RateTableItemstyles__RateTableBox-wdgpu0-0 > .RateTableItemstyles__CTAwrapper-wdgpu0-7 > .Buttonstyles__Button-lbs3hp-0')
    
      await page.navigationPromise;
      expect(await page.title()).toBe('Payment - Hilton San Francisco Financial District');
	});
});
