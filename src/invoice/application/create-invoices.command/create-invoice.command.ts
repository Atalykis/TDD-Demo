import { Detail } from "../../domain/detail";
import { Invoice } from "../../domain/invoice";
import { InvoiceStore } from "../invoice-store";

export interface CreateInvoiceCommand {
  client: string;
  title: string;

  details: {
    description: string;
    price: number;
  }[];
}

export class CreateInvoiceCommandHandler {
  constructor(private invoiceStore: InvoiceStore) {}

  handle(command: CreateInvoiceCommand): void {
    const invoice = new Invoice(command.client, command.title, command.details.map(detail => new Detail(detail.description, detail.price)));
    this.invoiceStore.save(invoice);
  }
}