const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should return a class with 'name', 'id', 'email', and 'github' properties when called with 'new' keyword", () => {
            const cls = new Engineer()

            expect("name" in cls).toEqual(true);
            expect("id" in cls).toEqual(true);
            expect("email" in cls).toEqual(true);
            expect("github" in cls).toEqual(true);
        })
        it("should set 'name', 'id', 'email', and 'github' when created", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const github = 'brian-l';

            const cls = new Engineer(name, id, email, github);

            expect(cls.name).toEqual(name);
            expect(cls.id).toEqual(id);
            expect(cls.email).toEqual(email);
            expect(cls.github).toEqual(github);
        })
    });
    describe("getName", () => {
        it("should return value of 'name' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const github = 'brian-l';

            const cls = new Engineer(name, id, email, github).getName();

            expect(cls).toEqual(name);
        })
    });
    describe("getId", () => {
        it("should return value of 'id' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const github = 'brian-l';

            const cls = new Engineer(name, id, email, github).getId();

            expect(cls).toEqual(id);
        })
    });
    describe("getEmail", () => {
        it("should return value of 'email' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const github = 'brian-l';

            const cls = new Engineer(name, id, email, github).getEmail();

            expect(cls).toEqual(email);
        })
    });
    describe("getGithub", () => {
        it("should return value of 'github' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const github = 'brian-l';

            const cls = new Engineer(name, id, email, github).getGithub();

            expect(cls).toEqual(github);
        })
    });
    describe("getRole", () => {
        it("should return value of 'Engineer' when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const github = 'brian-l';
            const role = 'Engineer';

            const cls = new Engineer(name, id, email, github).getRole();

            expect(cls).toEqual(role);
        })
    });
})