"use server";
export async function validateAndCall(formData: FormData) {
  const rawFormData = {
    steamid: formData.get("steamid"),
  };
  console.log(rawFormData);
}
