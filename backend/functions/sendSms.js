export async function sendSms() {
  const smsResponse = await fetch("https://api.smsmngr.com/v2/message", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      "x-api-key": process.env.SMSMANAGER_API,
    },
    body: JSON.stringify({
      body: `Shopr - Objednávka vyřízena

Vaše objednávka byla vyřízena a čeká na zaplacení. Zkontrolujte Váš email a objednávku zaplaťte.

S pozdravem
www.shopr.cz`,
      to: [
        {
          phone_number: "420602606331",
        },
      ],
    }),
  });

  return smsResponse;
}
