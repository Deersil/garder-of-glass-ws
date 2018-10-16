
import { usersControllers } from '@controllers';

export default (router: any) => {
  router.get('*', usersControllers.test);
  // router.post('/login', auth.login);
}