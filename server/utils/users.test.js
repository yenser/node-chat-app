const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Jens',
      room: 'class1'
    },{
      id: '2',
      name: 'Miranda',
      room: 'class2'
    },{
      id: '3',
      name: 'Erik',
      room: 'class1'
    }]
  })
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Jens',
      room: 'Room-A'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '5';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    userId = '3'
    var user = users.getUser(userId);
    expect(user.id).toEqual(userId);
  })

  it('should not find user', () => {
    userId = '4'
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });

  it('should return names for class1', () => {
    var userList = users.getUserList('class1');

    expect(userList).toEqual(['Jens', 'Erik']);
  });

  it('should return names for class2', () => {
    var userList = users.getUserList('class2');

    expect(userList).toEqual(['Miranda']);
  });
});
