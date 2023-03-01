const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should return a class with 'name', 'id', and 'email' properties when called with 'new' keyword", () => {
            const cls = new Employee()

            expect("name" in cls).toEqual(true);
            expect("id" in cls).toEqual(true);
            expect("email" in cls).toEqual(true);
        })
        it("should set 'name', 'id', and 'email' when created", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';

            const cls = new Employee(name, id, email);

            expect(cls.name).toEqual(name);
            expect(cls.id).toEqual(id);
            expect(cls.email).toEqual(email);
        })
    });
    describe("getName", () => {
        it("should return value of 'name' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';

            const cls = new Employee(name, id, email).getName();

            expect(cls).toEqual(name);
        })
    });
    describe("getId", () => {
        it("should return value of 'id' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';

            const cls = new Employee(name, id, email).getId();

            expect(cls).toEqual(id);
        })
    });
    describe("getEmail", () => {
        it("should return value of 'email' property when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';

            const cls = new Employee(name, id, email).getEmail();

            expect(cls).toEqual(email);
        })
    });
    describe("getRole", () => {
        it("should return value of 'Employee' when called", () => {
            const name = 'Brian';
            const id = 1;
            const email = 'someemail@email.com';
            const role = 'Employee'

            const cls = new Employee(name, id, email).getRole();

            expect(cls).toEqual(role);
        })
    });
})