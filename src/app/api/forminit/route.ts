import { createForminitProxy } from 'forminit/next';

const forminit = createForminitProxy({
  // Değişkenin sonuna ünlem (!) ekleyerek 'undefined' ihtimalini eledik
  apiKey: process.env.FORMINIT_API_KEY!, 
});

export const POST = forminit.POST;