import type { TweetV2, UserV2 } from 'twitter-api-v2';

const mockUsers: UserV2[] = [
  {
    id: 'mock_1',
    name: 'Alice Johnson',
    username: 'alice_tech',
    profile_image_url: 'https://ui-avatars.com/api/?name=Alice+Johnson'
  },
  {
    id: 'mock_2',
    name: 'Bob Smith',
    username: 'bob_codes',
    profile_image_url: 'https://ui-avatars.com/api/?name=Bob+Smith'
  },
  {
    id: 'mock_3',
    name: 'Carol White',
    username: 'carol_dev',
    profile_image_url: 'https://ui-avatars.com/api/?name=Carol+White'
  }
];

const mockTweets = [
  'Hey @xgenai, love your product! Can you help me with...',
  'Quick question about the AI features @xgenai...',
  'Amazing response time @xgenai! Thanks for...',
  '@xgenai Having trouble with the integration...',
  'Just tried @xgenai and I\'m impressed! How do I...'
];

export function generateMockMentions(count: number = 5) {
  const mentions: TweetV2[] = [];
  const users = [...mockUsers];

  for (let i = 0; i < count; i++) {
    const user = users[i % users.length];
    const tweet: TweetV2 = {
      id: `mock_tweet_${i}`,
      text: mockTweets[i % mockTweets.length],
      author_id: user.id,
      created_at: new Date(Date.now() - i * 3600000).toISOString(), // Each tweet 1 hour apart
      conversation_id: `mock_conv_${i}`,
      edit_history_tweet_ids: [`mock_tweet_${i}`]
    };
    mentions.push(tweet);
  }

  return {
    data: mentions,
    includes: {
      users: users
    }
  };
} 