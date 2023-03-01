const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should return a class with 'name', 'id', 'email', and 'school' properties when called with 'new' keyword", () => {
            const cls = new Intern()

            expect("name" in cls).toEqual(true);
            expect("id" in cls).toEqual(true);
            expect("email" in cls).toEqual(true);
            expect("school" in cls).toEqual(true);
        })
        it("should set 'name', 'id', 'email', and 'school' when created", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const school = 'ucdavis';

            const cls = new Intern(name, id, email, school);

            expect(cls.name).toEqual(name);
            expect(cls.id).toEqual(id);
            expect(cls.email).toEqual(email);
            expect(cls.school).toEqual(school);
        })
    });
    describe("getName", () => {
        it("should return value of 'name' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const school = 'ucdavis';

            const cls = new Intern(name, id, email, school).getName();

            expect(cls).toEqual(name);
        })
    });
    describe("getId", () => {
        it("should return value of 'id' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const school = 'ucdavis';

            const cls = new Intern(name, id, email, school).getId();

            expect(cls).toEqual(id);
        })
    });
    describe("getEmail", () => {
        it("should return value of 'email' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const school = 'ucdavis';

            const cls = new Intern(name, id, email, school).getEmail();

            expect(cls).toEqual(email);
        })
    });
    describe("getSchool", () => {
        it("should return value of 'school' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const school = 'ucdavis';

            const cls = new Intern(name, id, email, school).getSchool();

            expect(cls).toEqual(school);
        })
    });
    describe("getRole", () => {
        it("should return value of 'Intern' when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const school = 'ucdavis';
            const role = 'Intern'

            const cls = new Intern(name, id, email, school).getRole();

            expect(cls).toEqual(role);
        })
    });
})