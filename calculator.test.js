const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://didactic-sniffle-x59xqq7rwp97hvj65-5500.app.github.dev/'); // Update this path to your actual file path

    // Output the DOM to the terminal
    const domContent = await page.content();
    console.log(domContent);
        
    // Test addition: 1 + 2 = 3
    await page.click('button:has-text("1")');
    await page.click('button:has-text("+")');
    await page.click('button:has-text("2")');
    await page.click('button:has-text("=")');

    const result = await page.inputValue('#display');
    console.log(result === '3' ? 'Test Passed' : 'Test Failed');



    await browser.close();
})();