export async function sendSmsOrderComplete(phone) {
  const smsResponse = await fetch("https://api.smsmngr.com/v2/message", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
      "x-api-key": process.env.SMSMANAGER_API,
    },
    body: JSON.stringify({
      body: `Shopr: Objednávka vyřízena

Objednávka čeká na zaplacení. Zkontrolujte email a objednávku zaplaťte.

S pozdravem
www.shopr.cz`,
      to: [
        {
          phone_number: phone,
        },
      ],
    }),
  });

  return smsResponse;
}
