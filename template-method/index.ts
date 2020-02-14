import { Paypal, Ingenico } from "./Payment";

const paypal = new Paypal();

paypal.pay('John');

const ingenico = new Ingenico();

ingenico.pay('Billie');
