import type { UserV2 } from 'twitter-api-v2';

export const generateMockUser = () => {
  const mockUser: UserV2 = {
    id: 'mock_user_1',
    name: 'Demo User',
    username: 'demo_xgenai',
    profile_image_url: 'https://ui-avatars.com/api/?name=Demo+User',
    description: 'This is a demo account for testing XGenAI features'
  };

  return {
    data: mockUser
  };
}; 