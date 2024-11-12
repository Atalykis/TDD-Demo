import { InvoiceStoreInMemory } from "../../infrastructure/store/invoice-store.in-memory";
import { InvoiceStore } from "../invoice-store";
import { CreateInvoiceCommand, CreateInvoiceCommandHandler } from "./create-invoice.command";

describe("Invoie Creation Command", () => {
  it("should create an invoice", () => {
    const invoiceStore: InvoiceStore = new InvoiceStoreInMemory();
    
    const command: CreateInvoiceCommand = {client : "SomeClient", title : "Water consumption", details: []};

    const handler = new CreateInvoiceCommandHandler(invoiceStore);
    handler.handle(command);

    const expected = invoiceStore.get(command.client, command.title);

    expect(expected).toBeDefined();
  });
});
