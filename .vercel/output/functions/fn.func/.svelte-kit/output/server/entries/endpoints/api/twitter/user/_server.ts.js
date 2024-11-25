const generateMockUser = () => {
  const mockUser = {
    id: "mock_user_1",
    name: "Demo User",
    username: "demo_xgenai",
    profile_image_url: "https://ui-avatars.com/api/?name=Demo+User",
    description: "This is a demo account for testing XGenAI features"
  };
  return {
    data: mockUser
  };
};
async function GET({ request }) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      console.log("🚫 No auth header provided");
      return new Response(JSON.stringify({ error: "No authorization header" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log("🔄 Attempting to fetch user data from Twitter API...");
    const userResponse = await fetch("https://api.twitter.com/2/users/me?" + new URLSearchParams({
      "user.fields": "id,name,username,profile_image_url,description"
    }), {
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json"
      }
    });
    console.log("📊 Rate Limit Info:", {
      remaining: userResponse.headers.get("x-rate-limit-remaining"),
      limit: userResponse.headers.get("x-rate-limit-limit"),
      reset: new Date(parseInt(userResponse.headers.get("x-rate-limit-reset") || "0") * 1e3).toLocaleString()
    });
    if (userResponse.status === 429) {
      console.log("⚠️ Rate limit exceeded! Using mock data...");
      const mockData = generateMockUser();
      return new Response(JSON.stringify(mockData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-Using-Mock-Data": "true"
        }
      });
    }
    if (!userResponse.ok) {
      console.error("❌ User data error:", await userResponse.text());
      console.log("⚠️ Falling back to mock data due to error...");
      const mockData = generateMockUser();
      return new Response(JSON.stringify(mockData), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "X-Using-Mock-Data": "true"
        }
      });
    }
    console.log("✅ Successfully fetched user data from Twitter API");
    const userData = await userResponse.json();
    return new Response(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("❌ User data error:", error);
    console.log("⚠️ Using mock data due to error...");
    const mockData = generateMockUser();
    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "X-Using-Mock-Data": "true"
      }
    });
  }
}
export {
  GET
};
