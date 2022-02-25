
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
});

test("draw button displays the bots to choose from", async () => {
    const draw = await driver.findElement(By.id("draw"));
    await draw.click();
    const botCards = await driver.findElements(By.css('.bot-card'));
    expect(botCards).toHaveLength(5);
});

test("add to duo button adds to duo", async () => {
    const draw = await driver.findElement(By.id("draw"));
    await draw.click();

    const button1 = await driver.findElement(By.xpath(`//*[@id="choices"]/div/button`));
    await button1.click();
    const button2 = await driver.findElement(By.xpath(`//*[@id="choices"]/div/button`));
    await button2.click();

    expect(await driver.findElements(By.xpath('//*[@id="player-duo"]/div'))).toHaveLength(2);
});