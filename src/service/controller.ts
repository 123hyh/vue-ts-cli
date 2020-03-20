export class Controller{
  public prefix: string
  constructor(prefix = ''){
    this.prefix = prefix;
  }
  public handlerOutput(): any {
    return 1
  }
}  