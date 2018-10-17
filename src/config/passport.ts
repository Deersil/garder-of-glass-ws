import * as bcrypt from 'bcrypt';
import { Strategy } from 'passport-local';
// import * as passport from 'passport';

const generrateHash = (password: string) => bcrypt.hash(password, 8);


export default (passport: any, user: any) => {
  const User = user;
  const LocalStrategy = Strategy;
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, (req: any, email: string, password: string, done: any) => {
    console.log('sajonara ', req.body);
    User.findOne({
      where: {
        email,
      },
    }).then((user: any) => {
      
      // const { firsName, lastName } = req.body;
      if (user) {
        return done(null, false, {
          message: 'That email is already registered',
        });
      } else {
        generrateHash(password).then((userPassword ) => {
          const data = {
            email,
            password: userPassword,
            firstName: 'Test 1',
            lastName: 'Test 2',
          };
          User.create(data).then((newUser: any) => {
            if(newUser) {
              return done(null, newUser);
            } else {
              return done(null, false)
            }
          })
        });
      }
    })


  }));
  passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
  });
  passport.deserializeUser((id: any, done: any) => {
    User.findById(id).then((user: any) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
};