export const registerUser = async (formData: { username: string; email: string; password: string }) => {
  try {
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, message: error };
  }
};
export const loginUser = async (formData: { email: string; password: string }) => {
  try {
    
    const response = await fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return { success: true, data };
  } catch (error: any) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, message: errorMessage };
  }
};

