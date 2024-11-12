import { InvoiceStore } from "../../application/invoice-store";
import { Invoice } from "../../domain/invoice";

export class InvoiceStoreInMemory implements InvoiceStore {
  private invoices: Invoice[] = [];

  save(invoice: Invoice): void {
    this.invoices.push(invoice);
  }

  get(client: string, title: string): Invoice | undefined {
    return this.invoices.find(invoice => invoice.client === client && invoice.title === title);
  }
}