import type { TweetV2, UserV2 } from 'twitter-api-v2';

export interface Tweet extends TweetV2 {
  conversation_id: string;
  created_at: string;
  in_reply_to_user_id?: string;
}

export interface TwitterResponse {
  data: Tweet[];
  includes?: {
    users: UserV2[];
  };
}

export interface ConversationResponse {
  data: Tweet[];
  includes?: {
    users: UserV2[];
  };
} 