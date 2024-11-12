import { InvoiceStore } from "../invoice-store"

export interface CalculateInvoicePriceCommand {
  client : string
  title: string
}

export class CalculateInvoicePriceCommandHandler {
  constructor(private readonly store: InvoiceStore){}

  handle(command: CalculateInvoicePriceCommand){
    const invoice = this.store.get(command.client, command.title)
    if(!invoice){
      return
    }
    for(const detail of invoice.details){
      invoice.price += detail.price
    }

    return invoice.price
  }
}