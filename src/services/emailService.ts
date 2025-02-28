export interface EmailData {
  subject: string;
  text: string;
  html: string;
}

export const sendEmail = async (
  emailData: EmailData
): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    const data = await response.json();
    return { success: data.success };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error as string };
  }
};
