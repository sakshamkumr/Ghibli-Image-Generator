import axios from "axios";

const API_BASE = "https://ghibli-backend-production-f117.up.railway.app/api/v1";

export const generateFromText = async (prompt, style) => {
  const res = await axios.post(
    `${API_BASE}/generate-from-text`,
    { prompt, style },
    { responseType: "blob" }
  );
  return URL.createObjectURL(res.data);
};

export const generateFromImage = async (imageFile, prompt) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("prompt", prompt);

  const res = await axios.post(`${API_BASE}/generate`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
    responseType: "blob",
  });

  return URL.createObjectURL(res.data);
};
