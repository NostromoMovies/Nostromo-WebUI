import { ref } from 'vue';
import { SignupForm } from '@/types';
import { Router } from 'vue-router';
import { postService } from '@/api/PostService';  

export const useSignupStore = (router: Router) => {
  const form = ref<SignupForm>({
    username: '',
    password: ''
  });

  const message = ref<string>('');

  const register = async () => {
    try {
    
      const response = await postService.register(form.value);

      if (response.status === 200) {
        const result = response.data; 
        
        console.log('Account registered successfully:', result);
        
        message.value = 'Registration successful!';
        router.push('/login');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error: unknown) {
      console.error('Registration error:', error);
      
      if (error instanceof Error) {
        message.value = error.message || 'Registration failed, please try again.'; 
      } else {
        message.value = 'An unknown error occurred.';
      }
    }
  };

  return {
    form,
    register,
    message
  };
};
