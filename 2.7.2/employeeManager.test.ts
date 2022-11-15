import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver"
const chromedriver = require ("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
import { emManager } from "./employeeManager"
const employeePage = new emManager(driver)

class Analyst {
    name: string;
    phone: number;
    title: string;

    constructor(name: string, phone: number, title: string) {
        this.name = name;
        this.phone = phone;
        this.title = title;
    }
}

let newAnalyst: Array<Analyst> = [
    new Analyst("River", 1234567890, "Some You Don't Cross")
]

let addEmp = async (newAnalyst) => {
    await employeePage.navigate()
    await employeePage.click(employeePage.addEmployee)
    await employeePage.click(employeePage.newEmployee)
    await employeePage.click(employeePage.nameField)
    await employeePage.setInput(employeePage.nameField, newAnalyst.name)
    await employeePage.click(employeePage.phoneField)
    await employeePage.setInput(employeePage.phoneField, newAnalyst.phone)
    await employeePage.click(employeePage.titleField)
    await employeePage.setInput(employeePage.titleField, newAnalyst.title)
    await employeePage.click(employeePage.saveBtn)
    await employeePage.driver.sleep(3000)
}

test("add new employee", async () => {
    await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
    await addEmp(newAnalyst[0])
    await driver.quit()
})