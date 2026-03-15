import axios from "axios";
import BaseURL from "../BaseURL";

async function FetchHeaderData(HeaderData) {
  if (!Array.isArray(HeaderData) || HeaderData.length === 0) {
    throw new Error("HeaderData must be a non-empty array");
  }

  const normalizedHeaderData = HeaderData.map(({ id, name, href, link }) => ({
    id,
    name,
    link: link ?? href,
  }));

  try {
    const response = await axios.post(
      `${BaseURL}/server/header`,
      normalizedHeaderData,
    );
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || error.response?.data || error.message;
    console.error("Request failed:", message);
    throw error;
  }
}

export default FetchHeaderData;
