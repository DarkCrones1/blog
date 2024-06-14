const token = localStorage.getItem("token");

export async function DeleteCategory({ Id }: { Id: number }): Promise<boolean> {
  try {
    await fetch(`http://localhost:5149/api/Category/${Id}`, {
      method: "Delete",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    throw error;
  }
}
