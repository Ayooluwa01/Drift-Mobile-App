import * as MediaLibrary from "expo-media-library";

async function requestPermission() {
  let { status } = await MediaLibrary.getPermissionsAsync();
  if (status !== "granted") {
    const response = await MediaLibrary.requestPermissionsAsync();
    status = response.status;
  }
  return status === "granted";
}

export async function fetchMedia(type: "audio" | "video" | "photo") {
  const hasPermission = await requestPermission();
  if (!hasPermission) {
    console.warn("MediaLibrary permission not granted");
    return [];
  }

  const assets = await MediaLibrary.getAssetsAsync({
    first: 9999,
    mediaType: [type],
    sortBy: MediaLibrary.SortBy.creationTime,
  });

  return assets.assets.map((asset) => ({
    id: asset.id,
    filename: asset.filename,
    uri: asset.uri,
    duration: asset.duration,
    creationTime: asset.creationTime,
  }));
}

export async function fetchAllMedia() {
  const [images, videos, audios] = await Promise.all([
    fetchMedia("photo"),
    fetchMedia("video"),
    fetchMedia("audio"),
  ]);

  return { images, videos, audios };
}
