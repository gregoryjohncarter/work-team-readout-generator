const Manager = require('../lib/Manager.js');

test('get manager\'s office #', () => {
    const manager = new Manager('Meg', '4', 'Megyn@cloudburst.net', '302');
  
    expect(manager.officeNumber).toBe('302');
});

test('get manager\'s role', () => {
    const manager = new Manager('Meg', '4', 'Megyn@cloudburst.net', '302');
  
    expect(manager.role).toBe('Manager');
});