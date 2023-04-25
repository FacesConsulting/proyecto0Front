import { api } from "@/api/axiosAPI";
import { AxiosResponse } from "axios";
import * as crypto from "crypto";

export const fetchingDataEncrypted = async (
  data: string,
  url: string,
  method: string
): Promise<AxiosResponse> => {
  const key = crypto.randomBytes(16);
  const iv = crypto.randomBytes(16);

  // Crear instancia de cifrado
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);

  // Cifrar los datos
  let encryptedData = cipher.update(data, "utf8", "base64");
  encryptedData += cipher.final("base64");

  const res = api.post(
    url,
    JSON.stringify({
      data: encryptedData,
      key: key.toString("base64"),
      iv: iv.toString("base64"),
    })
  );

  return res
};
