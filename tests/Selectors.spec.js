import {expect, test} from "@playwright/test"

// new file first.
//import modules test and expect from playwright 
//create test and create async function and pass a page fixture within currly braces


test ('Selectors demo', async({page})=>{

await page.goto('https://saucedemo.com')
await expect(page).toHaveTitle('Swag Labs')
await page.pause()
await page.locator('input_error form_input').fill('Name')
await page.click('id=login-button')
await page.locator('id=login-button').click()
})