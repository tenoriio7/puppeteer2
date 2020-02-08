const puppeteer = require('puppeteer');

it('should return -1 when the value is not present', function () {
    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setViewport({
            width: 1920,
            height: 1080
        })
        await page.goto('https://pagseguro.uol.com.br/');
        await page.click('.header__login-container')
        await page.click('#entrar')
        await page.type('#user', 'test comment')
        await page.screenshot({ path: 'example.png' });
        await browser.close();
    })();
});


