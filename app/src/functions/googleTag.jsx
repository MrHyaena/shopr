import React from "react";

export default function GoogleTag() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "AW-16899008701");
  return <></>;
}
