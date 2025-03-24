//Emaily týkající se předplatných a plateb
export function emailTemplateActivateSubscription(subName, subWebsite, appUrl) {
  let body = `<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF;border-radius:16px"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="height:56px"></div>
              <div style="padding:16px 24px 16px 24px">
                <img
                  alt=""
                  src="cid:logo@nodemailer.com"
                  width="100"
                  style="width:100px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Dobrý den!
              </div>
              <div
                style="font-size:23px;font-weight:bold;padding:16px 24px 16px 24px"
              >
                Vaše předplatné bylo právě aktivováno!
              </div>
              <div style="font-size:16px;padding:16px 24px 16px 24px">
                <strong>Název předplatného: </strong>${subName}
              </div>
              <div style="font-size:16px;padding:16px 24px 16px 24px">
                <strong>Stránka e-shopu: </strong
                ><a href="${
                  "https://" + subWebsite
                }" target="_blank">${subWebsite}</a>
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                V tuto chvíli se vrháme na vyřízení vaší pravidelné objednávky.
                Od této chvíle se Vám budou pravidelně strhávat platby za každé
                vyřízené předplatné v intervalu, který jste si u předplatného
                nastavili. Vaše předplatné můžete spravovat v administraci
                aplikace. V administraci lze také předplatné kdykoliv zrušit,
                zkontrolovat datum další platby nebo změnit nastavení
                předplatného.
              </div>
              <div style="padding:16px 24px 16px 24px">
                <a
                  href="${appUrl}"
                  style="color:#FFFFFF;font-size:16px;font-weight:bold;background-color:#E11D48;border-radius:4px;display:inline-block;padding:12px 20px;text-decoration:none"
                  target="_blank"
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ><span>Přejít do administrace účtu</span
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ></a
                >
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Pokud byste měli jakýkoliv dotaz nebo problém, obraťte se na nás
                na emailové adrese info@shopr.cz
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                S pozdravem,
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Tým Shopr
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="height:56px"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;

  return body;
}

export function emailTemplateDeactivateSubscription(
  subName,
  subWebsite,
  appUrl
) {
  let body = `<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="height:56px"></div>
              <div style="padding:16px 24px 16px 24px">
                <img
                  alt=""
                  src="cid:logo@nodemailer.com"
                  width="100"
                  style="width:100px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Dobrý den!
              </div>
              <div
                style="font-size:25px;font-weight:bold;padding:16px 24px 16px 24px"
              >
                Vaše předplatné bylo deaktivováno
              </div>
              <div style="font-size:16px;padding:16px 24px 16px 24px">
                <strong>Název předplatného: </strong>${subName}
              </div>
              <div style="font-size:16px;padding:16px 24px 16px 24px">
                <strong>Web e-shopu: </strong
                ><a href="${
                  "https://" + subWebsite
                }" target="_blank">${subWebsite}</a>
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                V tuto chvíli je vaše předplatné deaktivováno. Znamená to, že
                jsme zrušili všechny automatické platby a objednávky nebudou
                nadále vyřizovány. Předplatné můžete kdykoliv znovu aktivovat.
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Pokud chcete předplatné jakkoliv upravit, můžete tak udělat z
                administrace uživatelského účtu.
              </div>
              <div style="padding:16px 24px 16px 24px">
                <a
                  href="${appUrl}"
                  style="color:#FFFFFF;font-size:16px;font-weight:bold;background-color:#E11D48;border-radius:4px;display:inline-block;padding:12px 20px;text-decoration:none"
                  target="_blank"
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ><span>Administrace uživatelského účtu</span
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ></a
                >
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Pokud byste měli jakýkoliv dotaz nebo problém, obraťte se na nás
                na emailové adrese info@shopr.cz
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                S pozdravem,
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Tým Shopr
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="height:56px"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;

  return body;
}

export function emailTemplatePaymentCompleted(subName, subWebsite, appUrl) {
  let body = `<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF;border-radius:16px"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="height:56px"></div>
              <div style="padding:16px 24px 16px 24px">
                <img
                  alt=""
                  src="cid:logo@nodemailer.com"
                  width="100"
                  style="width:100px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div
                style="font-size:16px;font-weight:normal;padding:16px 24px 16px 24px"
              >
                Dobrý den!
              </div>
              <div
                style="font-size:23px;font-weight:bold;padding:16px 24px 16px 24px"
              >
                Platba za předplatné proběhla úspěšně
              </div>
              <div style="font-size:16px;padding:16px 24px 16px 24px">
                <strong>Název předplatného: </strong>${subName}
              </div>
              <div style="font-size:16px;padding:16px 24px 16px 24px">
                <strong>Web e-shopu: </strong><a href=${
                  "https://" + subWebsite
                }>${subWebsite}
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                My se v tuto chvíli vrháme na vyplnění vaší objednávky. Pokud
                byste chtěli do budoucna předplatné jakkoliv upravit, zrušit
                nebo rozšířit, můžete tak udělat z administrace uživatelského
                účtu.
              </div>
              <div style="padding:16px 24px 16px 24px">
                <a
                  href="${appUrl}"
                  style="color:#FFFFFF;font-size:16px;font-weight:bold;background-color:#E11D48;border-radius:4px;display:inline-block;padding:12px 20px;text-decoration:none"
                  target="_blank"
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ><span>Administrace uživatelského účtu</span
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ></a
                >
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Pokud byste měli jakýkoliv dotaz, napište nám zprávu na
                emailovou adresu info@shopr.cz.
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                S pozdravem,
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Tým Shopr
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="height:56px"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;

  return body;
}

//Emaily týkající se účtu
export function emailTemplateActivateAccount(activationUrl) {
  let body = `<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF;border-radius:16px"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="height:56px"></div>
              <div style="padding:16px 24px 16px 24px">
                <img
                  alt=""
                  src="cid:logo@nodemailer.com"
                  width="100"
                  style="width:100px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div
                style="font-size:16px;font-weight:normal;padding:16px 24px 16px 24px"
              >
                Dobrý den! Vítáme Vás v naší aplikaci Shopr.
              </div>
              <div
                style="font-size:22px;font-weight:bold;padding:16px 24px 16px 24px"
              >
                Tento email slouží k aktivaci účtu.
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Abyste měli do aplikace přístup, je potřeba nejprve účet
                aktivovat. To uděláte jednoduše kliknutím na tlačítko níže. To Vás
                následně přenese na přihlašovací obrazovku.
              </div>
              <div style="padding:16px 24px 16px 24px">
                <a
                  href="${activationUrl}"
                  style="color:#FFFFFF;font-size:16px;font-weight:bold;background-color:#E11D48;border-radius:4px;display:inline-block;padding:12px 20px;text-decoration:none"
                  target="_blank"
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ><span>Aktivovat uživatelský účet</span
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ></a
                >
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Pokud byste měli s aktivací nějaký problém, napište nám zprávu
                na emailovou adresu info@shopr.cz.
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                S pozdravem,
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Tým Shopr
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="height:56px"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;

  return body;
}

export function emailTemplatePasswordChange(changeUrl) {
  let body = `<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF;border-radius:16px"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="height:56px"></div>
              <div style="padding:16px 24px 16px 24px">
                <img
                  alt=""
                  src="cid:logo@nodemailer.com"
                  width="100"
                  style="width:100px;outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Dobrý den!
              </div>
              <div
                style="font-size:22px;font-weight:bold;padding:16px 24px 16px 24px"
              >
                Tento email slouží pro změnu hesla v aplikaci Shopr
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Pro změnu hesla klepněte na tlačítko níže:
              </div>
              <div style="padding:16px 24px 16px 24px">
                <a
                  href="${changeUrl}"
                  style="color:#FFFFFF;font-size:16px;font-weight:bold;background-color:#E11D48;border-radius:4px;display:inline-block;padding:12px 20px;text-decoration:none"
                  target="_blank"
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ><span>Klikněte zde pro změnu hesla</span
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ></a
                >
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Pokud jste si tuto změnu nevyžádali, napište nám prosím na
                adresu info@shopr.cz.
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                S pozdravem,
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Tým Shopr
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="height:56px"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;

  return body;
}

export function emailTemplateUserMessage(
  subject,
  message,
  email,
  subscription
) {
  let body = `<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF;border-radius:16px"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="height:60px"></div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="font-weight:bold;padding:16px 24px 16px 24px">
                Email uživatele: ${email}
              </div>
              <div style="font-weight:bold;padding:16px 24px 16px 24px">
                Předplatné: ${subscription}
              </div>
              <div style="font-weight:bold;padding:16px 24px 16px 24px">
                Předmět: 
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
              ${subject}
              </div>
              <div style="font-weight:bold;padding:16px 24px 16px 24px">
                Zpráva:
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
              ${message}
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="height:56px"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;
  return body;
}

export function emailTemplateDeleteUser(email) {
  let body = `<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F5F5F5;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF;border-radius:16px"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="height:56px"></div>
              <div style="padding:16px 24px 16px 24px">
                <img
                  alt=""
                  width="100"
                  src="cid:logo@nodemailer.com"
                  style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Dobrý den!
              </div>
              <div
                style="font-size:21px;font-weight:bold;padding:16px 24px 16px 24px"
              >
                Váš účet v naší aplikaci Shopr byl plně zrušen.
              </div>
              <div style="font-weight:bold;padding:16px 24px 16px 24px">
                Účet pro email: ${email}
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Všechna předplatná jsou deaktivována. Z vaší karty se tím pádem
                nebudou strhávat žádné další platby. Stejně tak jsme smazali
                vaše uživatelské údaje. Samozřejmě nás mrzí, že odcházíte,
                nicméně to naprosto chápeme. Je zbytečné platit za službu,
                kterou nepoužíváte, případně kterou nepotřebujete, nebo s ní
                nejste spokojeni. Přejeme Vám do budoucna to nejlepší a budeme
                doufat, že se ještě někdy zastavíte.
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                S pozdravem,
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                Tým Shopr
              </div>
              <div style="padding:16px 0px 16px 0px">
                <hr
                  style="width:100%;border:none;border-top:1px solid #CCCCCC;margin:0"
                />
              </div>
              <div style="height:56px"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>`;
  return body;
}
