import { ref, onMounted } from 'vue';
import { LoginForm } from '@/types';
import { useRouter } from 'vue-router';
import { postService } from '@/api/PostService'; 
import { useAuthStore} from '@/services/authStore'




export const useLoginStore = () => {
  const router = useRouter();
  const authStore = useAuthStore();
  const form = ref<LoginForm>({
    username: '', 
    password: '',
    device: navigator.userAgent
  });
  
  const message = ref<string>('');

  const user = ref(null);
  onMounted(() => {
    if (authStore.isAuthenticated) {
      
      console.log('Token found:', authStore.apikey);
    }
  });

  
  const login = async () => {
    try {
      const response = await postService.login(form.value); 
      if (response.status === 200) {
        const result = await response.data; 
        

        console.log('Logged in successfully:', result);
        
        message.value = 'Login successful!'; 
        authStore.setApiKey(result.token);
        message.value = 'Login sucessful';
        router.push('/home');  
      } else {
        message.value = 'Invalid credentials';
        throw new Error('Failed to login');
       
      }
    } catch (error: unknown) {
      console.error('Login error:', error);

      if (error instanceof Error) {
        message.value = error.message || 'Login failed, please try again.'; 
      } else {
        message.value = 'An unknown error occurred.';
      }
    }




  };
  const logout = () => {
    authStore.logout();
    router.push('/');
  };

  return {
    form,
    login,
    logout,
    user,
    message
  };
};
