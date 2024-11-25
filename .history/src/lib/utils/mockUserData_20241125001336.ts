type UserV2 = {
  id: string;
  name: string;
  username: string;
  profile_image_url: string;
  description: string;
}

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