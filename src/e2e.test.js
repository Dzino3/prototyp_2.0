import puppeteer from "puppeteer-core";
import { executablePath } from 'puppeteer';

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      executablePath:'chrome.exe',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    page = await browser.newPage();
  });

  it.skip("contains the welcome text", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".loginWelcome");
    const text = await page.$eval(".loginWelcome", (e) => e.textContent);
    expect(text).toContain("Edit src/App.js Willkommen zu deb Tracker.");
  });

  afterAll(() => browser?.close());
});