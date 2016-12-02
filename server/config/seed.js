/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Flow from '../api/flow/flow.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Flow.find({}).remove()
  .then(() => {
    Flow.create({
      name: 'Angular 2',
      description: 'This room for JavaScript developers, who love Angular 2',
      private: false,
      img: 'http://javahero.ru/wp-content/uploads/2016/06/500628_a962.jpg',
      delete: false,
      users: [{name: 'Vova'}, {name: 'Vasya Pupkin'}],
      msg: [{
        user: '',
        msg: 'Hello everyone'
      }],
      events: [{
        name: 'Same event 1',
        description: 'Same event 1',
        place: 'Kyiv',
        price: '120$',
        img: 'http://javahero.ru/wp-content/uploads/2016/06/500628_a962.jpg',
        hashtags: ['dsadsa', 'sadadsa'],
      }, {
        name: 'Same event 2',
        description: 'Same event 2',
        place: 'Kyiv',
        price: '120$',
        img: 'http://javahero.ru/wp-content/uploads/2016/06/500628_a962.jpg',
        hashtags: ['dsadsa', 'sadadsa'],
      }, {
        name: 'Same event 3',
        description: 'Same event 3',
        place: 'Kyiv',
        price: '120$',
        img: 'http://javahero.ru/wp-content/uploads/2016/06/500628_a962.jpg',
        hashtags: ['dsadsa', 'sadadsa'],
      }]
    }, {
      name: 'React',
      description: 'This room for JavaScript developers, who love React',
      private: false,
      img: 'http://react-etc.net/files/2016-07/logo-578x270.png',
      delete: false,
      users: [{name: 'Vova'}, {name: 'Vasya Pupkin'}],
      msg: [{
        user: '',
        msg: 'Hello everyone'
      }],
      events: [{
        name: "Node.js events",
        description: 'Write code with friends',
        place: 'Kyiv',
        price: '120$',
        img: 'http://react-etc.net/files/2016-07/logo-578x270.png',
        hashtags: ['dsadsa', 'sadadsa'],
      }]
    }, {
      name: 'Node JS',
      description: 'This room for JavaScript developers, who love Angular 2',
      img: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png',
      private: false,
      delete: false,
      users: [{name: 'Vova'}, {name: 'Vasya Pupkin'}],
      msg: [{
        user: '',
        msg: 'Hello everyone'
      }],
      events: [{
        name: "Whazzup",
        description: "!000% Black rap",
        place: 'Kyiv',
        price: '120$',
        img: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png',
        hashtags: ['dsadsa', 'sadadsa'],
      }]
    }, {
      name: 'JavaScript',
      description: 'This room for JavaScript developers, who love JavaScript',
      private: false,
      delete: false,
      img: 'https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png',
      users: [{name: 'Vova'}, {name: 'Vasya Pupkin'}],
      msg: [{
        user: '',
        msg: 'Hello everyone'
      }],
      events: [{
        name: "Barbar",
        description: 'Drink today',
        place: 'Kyiv',
        price: '120$',
        img: 'https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png',
        hashtags: ['dsadsa', 'sadadsa'],
      }]
    }, {
      name: "Angular 2",
      description: "This room for JavaScript developers, who love Angular 2",
      private: false,
      img: 'http://javahero.ru/wp-content/uploads/2016/06/500628_a962.jpg',
      delete: false,
      users: [{name: 'Vova'}, {name: 'Vasya Pupkin'}],
      msg: [{
        user: '',
        msg: 'Hello everyone'
      }],
      events: [{
        place: 'Kyiv',
        price: '120$',
        img: 'http://javahero.ru/wp-content/uploads/2016/06/500628_a962.jpg',
        hashtags: ['dsadsa', 'sadadsa'], 
      }]
    }, {
      name: "React",
      description: "This room for JavaScript developers, who love React",
      private: false,
      img: 'http://react-etc.net/files/2016-07/logo-578x270.png',
      delete: false,
      users: [{name: 'Vova'}, {name: 'Vasya Pupkin'}],
      msg: [{
        user: '',
        msg: 'Hello everyone'
      }],
      events: [{
        place: 'Kyiv',
        price: '120$',
        img: 'http://react-etc.net/files/2016-07/logo-578x270.png',
        hashtags: ['dsadsa', 'sadadsa'], 
      }]
    }, {
      name: "Node JS",
      description: "This room for JavaScript developers, who love Angular 2",
      img: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png',
      private: false,
      delete: false,
      users: ['Petya', 'Vasya Pupkin'],
      msg: [{
        user: 'Admin',
        msg: 'Hello everyone'
      }],
      events: [{
        name: "Event 1",
        place: 'Kyiv',
        price: '120$',
        img: 'https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/07/1436439824nodejs-logo.png',
        hashtags: ['dsadsa', 'sadadsa'], 
      }]
    }, {
      name: "JavaScript",
      description: "This room for JavaScript developers, who love JavaScript",
      private: false,
      delete: false,
      img: 'https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png',
      users: [{name: 'Vova'}, {name: 'Vasya Pupkin'}],
      msg: [{
        user: '',
        msg: 'Hello everyone'
      }],
      events: [{
        name: 'Event2',
        place: 'Kyiv',
        price: '120$',
        img: 'https://www.planet-source-code.com/vb/2010Redesign/images/LangugeHomePages/HTML5_CSS_JavaScript.png',
        hashtags: ['dsadsa', 'sadadsa'], 
      }]
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
