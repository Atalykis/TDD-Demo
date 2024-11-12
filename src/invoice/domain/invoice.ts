import { Detail } from "./detail"

export class Invoice {

  public price: number = 0

  constructor(
    public client: string,
    public title: string,

    public details: Detail[] 
  ) {
  }
}