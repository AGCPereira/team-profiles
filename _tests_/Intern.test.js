const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Ashley', 92, 'ashleygrace009@yahoo.com', 'UofT');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Ashley', 92, 'ashleygrace009@yahoo.com', 'UofT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Ashley', 92, 'ashleygrace009@yahoo.comm', 'UofT');

    expect(intern.getRole()).toEqual("Intern");
}); 