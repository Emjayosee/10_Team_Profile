// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, OfficeNumber) {
        super(name, id, email);
        this.office = OfficeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;