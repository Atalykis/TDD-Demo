import { Invoice } from "../domain/invoice";

export interface InvoiceStore {
  save(invoice: Invoice): void;
  get(client: string, title: string): Invoice | undefined;
}