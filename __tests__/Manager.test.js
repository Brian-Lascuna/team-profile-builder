const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should return a class with 'name', 'id', 'email', and 'officeNum' properties when called with 'new' keyword", () => {
            const cls = new Manager()

            expect("name" in cls).toEqual(true);
            expect("id" in cls).toEqual(true);
            expect("email" in cls).toEqual(true);
            expect("officeNum" in cls).toEqual(true);
        })
        it("should set 'name', 'id', 'email', and 'officeNum' when created", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const officeNum = 100;

            const cls = new Manager(name, id, email, officeNum);

            expect(cls.name).toEqual(name);
            expect(cls.id).toEqual(id);
            expect(cls.email).toEqual(email);
            expect(cls.officeNum).toEqual(officeNum);
        })
    });
    describe("getName", () => {
        it("should return value of 'name' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const officeNum = 100;

            const cls = new Manager(name, id, email, officeNum).getName();

            expect(cls).toEqual(name);
        })
    });
    describe("getId", () => {
        it("should return value of 'id' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const officeNum = 100;

            const cls = new Manager(name, id, email, officeNum).getId();

            expect(cls).toEqual(id);
        })
    });
    describe("getEmail", () => {
        it("should return value of 'email' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const officeNum = 100;

            const cls = new Manager(name, id, email, officeNum).getEmail();

            expect(cls).toEqual(email);
        })
    });
    describe("getRole", () => {
        it("should return value of 'Manager' when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const officeNum = 100;
            const role = 'Manager'

            const cls = new Manager(name, id, email, officeNum).getRole();

            expect(cls).toEqual(role);
        })
    });
})