
export abstract class Payment {
  abstract execute(payment: object, user: string): void;

  public pay(userId: string) {
    this.verifyUser(userId);

    const payment = this.createPayment();

    this.execute(payment, userId);
  }

  private verifyUser(userId: string): boolean {
    console.log('user verified');

    return true;
  }

  private createPayment(): object {
    console.log('created payment');

    return {
      paymentData: {}
    };
  }
}

export class Paypal extends Payment {
  public execute(payment: object, user: string): void {
    console.log('calling paypal api');
  }
}

export class Ingenico extends Payment {
  public execute(payment: object, user: string): void {
    console.log('calling Ingenico api');
  }
}
