const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Ashley', 92, 'ashleygrace009@yahoo.com', 'AGCPereira');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Ashley', 92, 'ashleygrace009@yahoo.com', 'AGCPereira');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Ashley', 92, 'ashleygrace009@yahoo.com', 'AGCPereira');

    expect(engineer.getRole()).toEqual("Engineer");
});