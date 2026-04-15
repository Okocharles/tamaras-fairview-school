/**
 * lib/paystack.ts
 * Utility for handling Paystack payments and status verifications.
 */

export interface PaystackTransaction {
  reference: string;
  amount_naira: number;
  email: string;
  metadata?: any;
}

/**
 * MOCK: Simulates the initialization of a Paystack transaction
 */
export async function initializeTransaction(data: PaystackTransaction) {
  console.log(`Initializing Paystack transaction for ${data.email}: ${data.amount_naira} NGN`);
  
  // In a real app, this would call the Paystack API using a secret key
  return {
    status: true,
    message: "Authorization URL created",
    data: {
      authorization_url: `https://checkout.paystack.com/mock-auth-${data.reference}`,
      access_code: `mock_code_${data.reference}`,
      reference: data.reference
    }
  };
}

/**
 * MOCK: Simulates verification of a transaction reference
 */
export async function verifyTransaction(reference: string) {
  // Simulating a successful response
  return {
    status: true,
    data: {
      id: 1234567,
      status: "success",
      reference: reference,
      amount: 5000000, // In kobo
      gateway_response: "Successful",
      paid_at: new Date().toISOString(),
      channel: "card",
      currency: "NGN",
      metadata: { student_id: "TF_STUDENT_001" }
    }
  };
}

/**
 * Formats numbers into Naira currency string
 */
export function formatNaira(amountInNaira: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(amountInNaira);
}
