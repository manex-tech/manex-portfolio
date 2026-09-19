export type PublicPhoto = { id: string; alt: string; caption: string; year: string };
export async function getPhotos(): Promise<PublicPhoto[]> {
  return [];
}
