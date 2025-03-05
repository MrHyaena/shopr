export function emailTemplateActivateSubscription(subName) {
  let body = `<h4>Dobr&yacute; den!</h4>
<h2>Va&scaron;e předplatn&eacute; s n&aacute;zvem - ${subName} - bylo pr&aacute;vě aktivov&aacute;no!</h2>
<p>V tuto chv&iacute;li se vrh&aacute;me na vyř&iacute;zen&iacute; va&scaron;&iacute; pravideln&eacute; objedn&aacute;vky.</p>
<p>Va&scaron;e předplatn&eacute; můžete spravovat v administraci aplikace.</p>
<p>S pozdravem,</p>
<p>T&yacute;m Shopr</p>`;

  return body;
}

export function emailTemplateActivateAccount(activationUrl) {
  let body = `<h3>Dobr&yacute; den! V&iacute;t&aacute;me V&aacute;s v na&scaron;&iacute; aplikaci.</h3>
<h2>Tento email slouž&iacute; k aktivaci &uacute;čtu.</h2>
<p>Abyste měli do aplikace př&iacute;stup, je potřeba nejprve &uacute;čet aktivovat. To uděl&aacute;te jednodu&scaron;e kliknut&iacute;m na odkaz n&iacute;že. Ten V&aacute;s n&aacute;sledně přenese na přihla&scaron;ovac&iacute; obrazovku.</p>
<p>${activationUrl}</p>
<p>V&aacute;&scaron; &uacute;čet bude okamžitě aktivov&aacute;n a můžete se ihned přihl&aacute;sit.</p>
<p>S pozdravem,</p>
<p>T&yacute;m Shopr.</p>`;

  return body;
}

export function emailTemplatePasswordChange(changeUrl) {
  let body = `<h3>Dobr&yacute; den!</h3>
<h2>Tento email slouž&iacute; pro změnu hesla v aplikaci Shopr</h2>
<p>Pro změnu hesla klepněte na odkaz n&iacute;že:</p>
<p><a href="${url}">${url}</a></p>
<p>Pokud jste si tuto změnu nevyž&aacute;dali, napi&scaron;te n&aacute;m pros&iacute;m na adresu <a href="mailto:info@shopr.cz">info@shopr.cz</a>.</p>
<p>S pozdravem,</p>
<p>T&yacute;m Shopr</p>`;

  return body;
}

export function emailTemplateUserMessage(message, email) {
  let body = `<h2>uživatelská zpráva</h2><p>${message}</p><p>${email}</p>`;
  return body;
}
