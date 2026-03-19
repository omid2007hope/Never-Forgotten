async function fetchHeaderData() {
  const response = await fetch("/api/headers", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    let message = `Failed to fetch header data (${response.status})`;

    try {
      const payload = await response.json();
      message = payload.error || payload.message || message;
    } catch {
      // Keep the default message when the response body is not JSON.
    }

    throw new Error(message);
  }

  const headerData = await response.json();

  if (!Array.isArray(headerData)) {
    throw new Error("Header API returned an invalid payload.");
  }

  return headerData
    .map(({ id, name, link, href }) => ({
      id,
      name,
      href: link ?? href ?? "/",
    }))
    .filter((option) => option.id && option.name);
}

export default fetchHeaderData;
