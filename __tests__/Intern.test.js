const Intern = require('../lib/Intern.js');

test('get intern\'s school', () => {
    const intern = new Intern('KC', '3', 'KCB@Aol.com', 'Barnard');
  
    expect(intern.school).toBe('Barnard');
});

test('get intern\'s role', () => {
    const intern = new Intern('KC', '3', 'KCB@Aol.com', 'Barnard');
  
    expect(intern.role).toBe('Intern');
});