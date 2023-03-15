function generateCard(role, classObj) {
    if (role == 'Manager') {
        let managerCard = `
        <div class="card bg-primary" style="width: 18rem; height: 20rem;">
            <h2 class="name ms-2">${classObj.getName()}</h2>
            <h2 class="role ms-2"><i class="fa-sharp fa-solid fa-user-tie"></i>${classObj.getRole()}</h2>
            <div class="card-body bg-light position-relative">
                <ul class="list-group position-absolute top-50 start-50 translate-middle" style="width: 90%;">
                    <li class="list-group-item id">ID: ${classObj.getId()}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${classObj.getEmail()}">${classObj.getEmail()}</a></li>
                    <li class="list-group-item role-specific">Office Number: ${classObj.getOfficeNum()}</li>
                  </ul>
            </div>
        </div>`
        return managerCard;
    }
    else if (role == 'Engineer') {
        let engineerCard = `
        <div class="card bg-primary" style="width: 18rem; height: 20rem;">
            <h2 class="name ms-2">${classObj.getName()}</h2>
            <h2 class="role ms-2"><i class="fa-sharp fa-solid fa-gears"></i>${classObj.getRole()}</h2>
            <div class="card-body bg-light position-relative">
                <ul class="list-group position-absolute top-50 start-50 translate-middle" style="width: 90%;">
                    <li class="list-group-item id">ID: ${classObj.getId()}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${classObj.getEmail()}">${classObj.getEmail()}</a></li>
                    <li class="list-group-item role-specific">Github: <a href="https://github.com/${classObj.getGithub()}" target="_blank">${classObj.getGithub()}</a></li>
                  </ul>
            </div>
        </div>`
        return engineerCard;
    }
    else if (role == 'Intern') {
        let internCard = `
        <div class="card bg-primary" style="width: 18rem; height: 20rem;">
            <h2 class="name ms-2">${classObj.getName()}</h2>
            <h2 class="role ms-2"><i class="fa-sharp fa-solid fa-user"></i>${classObj.getRole()}</h2>
            <div class="card-body bg-light position-relative">
                <ul class="list-group position-absolute top-50 start-50 translate-middle" style="width: 90%;">
                    <li class="list-group-item id">ID: ${classObj.getId()}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${classObj.getEmail()}">${classObj.getEmail()}</a></li>
                    <li class="list-group-item role-specific">School: ${classObj.getSchool()}</li>
                  </ul>
            </div>
        </div>`
        return internCard;
    }
}

module.exports = generateCard;