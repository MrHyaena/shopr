//general functions that are not middleware
//------------------------------------------------------

//------------------------------- PIPEDRIVE FUNCTIONS -------------------------------------------------

//PipedriveApiCallV1 function
export async function pipedriveApiCallV1(endpoint, method, payload) {
  const response = await fetch(process.env.PIPEDRIVE_URL + "/v1/" + endpoint, {
    method: method,
    mode: "cors",
    headers: {
      "x-api-token": process.env.PIPEDRIVE_SECRET,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return response;
}

//PipedriveApiCallV2 function
export async function pipedriveApiCallV2(endpoint, method, payload) {
  const response = await fetch(
    process.env.PIPEDRIVE_URL + "/api/v2/" + endpoint,
    {
      method: method,
      mode: "cors",
      headers: {
        "x-api-token": process.env.PIPEDRIVE_SECRET,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return response;
}

//PipedriveApiCallDeleteV2 function
export async function pipedriveApiCallDeleteV2(endpoint, method) {
  const response = await fetch(
    process.env.PIPEDRIVE_URL + "/api/v2/" + endpoint,
    {
      method: method,
      mode: "cors",
      headers: {
        "x-api-token": process.env.PIPEDRIVE_SECRET,
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}
