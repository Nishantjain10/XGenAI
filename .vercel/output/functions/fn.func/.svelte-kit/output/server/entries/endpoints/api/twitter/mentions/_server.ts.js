import { j as json } from "../../../../../chunks/vendor.js";
const mockUsers = [
  {
    id: "mock_1",
    name: "Alice Johnson",
    username: "alice_tech",
    profile_image_url: "https://ui-avatars.com/api/?name=Alice+Johnson"
  },
  {
    id: "mock_2",
    name: "Bob Smith",
    username: "bob_codes",
    profile_image_url: "https://ui-avatars.com/api/?name=Bob+Smith"
  },
  {
    id: "mock_3",
    name: "Carol White",
    username: "carol_dev",
    profile_image_url: "https://ui-avatars.com/api/?name=Carol+White"
  }
];
const mockTweets = [
  "Hey @xgenai, love your product! Can you help me with...",
  "Quick question about the AI features @xgenai...",
  "Amazing response time @xgenai! Thanks for...",
  "@xgenai Having trouble with the integration...",
  "Just tried @xgenai and I'm impressed! How do I..."
];
function generateMockMentions(count = 5) {
  const mentions = [];
  const users = [...mockUsers];
  for (let i = 0; i < count; i++) {
    const user = users[i % users.length];
    const tweet = {
      id: `mock_tweet_${i}`,
      text: mockTweets[i % mockTweets.length],
      author_id: user.id,
      created_at: new Date(Date.now() - i * 36e5).toISOString(),
      // Each tweet 1 hour apart
      conversation_id: `mock_conv_${i}`
    };
    mentions.push(tweet);
  }
  return {
    data: mentions,
    includes: {
      users
    }
  };
}
async function GET({ request }) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return json({ error: "No authorization header" }, { status: 401 });
    }
    const url = new URL("https://api.twitter.com/2/users/me/mentions");
    url.searchParams.append("max_results", "20");
    url.searchParams.append("tweet.fields", "created_at,author_id,conversation_id");
    url.searchParams.append("expansions", "author_id");
    url.searchParams.append("user.fields", "id,name,username,profile_image_url");
    const mentionsResponse = await fetch(url, {
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json"
      }
    });
    if (mentionsResponse.status === 429) {
      console.log("Rate limited, returning mock data");
      const mockData = generateMockMentions(5);
      return json(mockData);
    }
    if (!mentionsResponse.ok) {
      console.error("Mentions error, falling back to mock data");
      const mockData = generateMockMentions(5);
      return json(mockData);
    }
    const mentionsData = await mentionsResponse.json();
    return json(mentionsData);
  } catch (error) {
    console.error("Mentions error:", error);
    const mockData = generateMockMentions(5);
    return json(mockData);
  }
}
export {
  GET
};
