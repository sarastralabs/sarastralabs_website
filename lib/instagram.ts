import "server-only";

export type InstagramPost = {
  id: string;
  caption: string;
  imageUrl: string;
  permalink: string;
  timestamp: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

type ApiMedia = {
  id: string;
  caption?: string;
  media_type: InstagramPost["mediaType"];
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

const GRAPH_URL = process.env.INSTAGRAM_GRAPH_URL || "https://graph.instagram.com";

/**
 * Latest posts from the Sarastra Labs Instagram account, via the Instagram API
 * (Instagram Login). Needs INSTAGRAM_ACCESS_TOKEN; returns [] when it is not
 * set or the request fails, so callers can fall back to static content.
 * Results are cached and refreshed at most once an hour.
 */
export async function getInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return [];

  const params = new URLSearchParams({
    fields: "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
    limit: String(limit),
    access_token: token,
  });

  try {
    const res = await fetch(`${GRAPH_URL}/me/media?${params}`, { next: { revalidate: 3600 } });
    if (!res.ok) {
      console.error(`Instagram feed request failed: ${res.status}`);
      return [];
    }
    const json = (await res.json()) as { data?: ApiMedia[] };
    return (json.data ?? [])
      .map((m) => ({
        id: m.id,
        caption: m.caption ?? "",
        imageUrl: (m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url) ?? "",
        permalink: m.permalink,
        timestamp: m.timestamp,
        mediaType: m.media_type,
      }))
      .filter((p) => p.imageUrl);
  } catch (err) {
    console.error("Instagram feed request failed", err);
    return [];
  }
}
