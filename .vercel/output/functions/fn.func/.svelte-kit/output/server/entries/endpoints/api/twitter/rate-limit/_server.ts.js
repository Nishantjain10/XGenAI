import { j as json } from "../../../../../chunks/vendor.js";
async function GET({ request }) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return json({ error: "No authorization header" }, { status: 401 });
    }
    const response = await fetch("https://api.twitter.com/2/users/me/tweets", {
      method: "GET",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json"
      }
    });
    const rateLimitRemaining = response.headers.get("x-rate-limit-remaining");
    const rateLimitReset = response.headers.get("x-rate-limit-reset");
    const rateLimitLimit = response.headers.get("x-rate-limit-limit");
    return json({
      remaining: rateLimitRemaining,
      reset: rateLimitReset,
      limit: rateLimitLimit,
      resetDate: rateLimitReset ? new Date(parseInt(rateLimitReset) * 1e3).toISOString() : null
    });
  } catch (error) {
    console.error("Rate limit check error:", error);
    return json({ error: "Failed to check rate limits" }, { status: 500 });
  }
}
export {
  GET
};
