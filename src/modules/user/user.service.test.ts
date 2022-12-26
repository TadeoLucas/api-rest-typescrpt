// import { v4 as uuidv4 } from 'uuid';
import User from './user.model';
import { deletUserByIdDbService } from './user.service'


describe('Testing Service: User', () => {

  describe('Testing createUserService', () => {

    //happy path
    it('Should create a new User', async () => {
      const newUser = await User.create({
        account_name: 'alberto_56',
        firstName: 'alberto enrique',
        lastName: 'Sanchez',
        password: 'Cat.caty22',
        email: 'catalina.suerte@gmail.com',
        status: 'active'
      });

      expect(newUser?.status).toBe('active');
      expect(newUser?.id).not.toBe(null);
      await deletUserByIdDbService(newUser?.id);
    })
    //TODO: test unHappy paths
  });
});