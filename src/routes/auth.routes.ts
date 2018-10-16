
import { usersControllers } from '@controllers';

export default (router: any) => {
  router.post('*', usersControllers.signUp);
  // router.post('/login', auth.login);
}