import { dtoMapper as userDtoMapper } from './user.dto';

export default (method: string) => ({
  ...userDtoMapper.loginDto,
}[method])