export interface CloudinaryResult {
  public_id: string;
  secure_url: string;
}

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
  );
  formData.append("folder", `pets`);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error al cargar la imagen");
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const generateUploadSignature = async () => {
  try {
    const response = await fetch("/api/cloudinary/sign", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Error al generar la firma");
    }

    return response.json();
  } catch (error) {
    console.error("Error generating signature:", error);
    throw error;
  }
};
