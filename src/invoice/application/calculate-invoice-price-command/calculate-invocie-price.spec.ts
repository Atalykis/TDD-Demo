import { TimeoutError } from "fetch-h2"
import { Invoice } from "../../domain/invoice"
import { InvoiceStoreInMemory } from "../../infrastructure/store/invoice-store.in-memory"
import { CalculateInvoicePriceCommandHandler } from "./calculate-invoice-price.command"
import { Detail } from "../../domain/detail"

describe("Calculate Invoice Price", () => {

  beforeAll(()=> {

  })
  it("should calculate invoice's price", () => {
    const invoice = new Invoice("somei", "title", [new Detail("title", 100)])
    const invoicetwo = new Invoice("somei", "title2", [new Detail("title", 200)])

    const store = new InvoiceStoreInMemory()
    store.save(invoice)
    store.save(invoicetwo)
    
    const command = {client :"somei", title: "title"}
    const commandtwo = {client :"somei", title: "title2"}

    const handler = new CalculateInvoicePriceCommandHandler(store)
    const price = handler.handle(command)
    const pricetwo = handler.handle(commandtwo)

    expect(price).toEqual(100)
    expect(pricetwo).toEqual(200)
  })
})



