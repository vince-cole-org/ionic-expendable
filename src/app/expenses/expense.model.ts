import { v4 as uuidv4 } from 'uuid';

export class Expense {
  public id: string;
  public timestamp: string;

  constructor(
    public imageUrl: string,
    public value: number
  ) {
    this.id = uuidv4();  
    this.timestamp = new Date().toISOString();
  }
}
