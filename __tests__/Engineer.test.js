const Engineer = require('../lib/Engineer.js');

test('get github username', () => {
    const engineer = new Engineer('Brian', '2', 'Brian@yahoo.com', 'Lernantino');
  
    expect(engineer.gitHub).toBe('Lernantino');
});

test('get engineer\'s role', () => {
    const engineer = new Engineer('Brian', '2', 'Brian@yahoo.com', 'Lernantino');
  
    expect(engineer.role).toBe('Engineer');
});