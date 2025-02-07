
if (document.getElementById("confirm")
) {
    document.getElementById("confirm").onclick = (event) => {
        event.preventDefault();
        const user = {
            username: document.getElementById("emailin").value,
            password: document.getElementById("passwordin").value
        }
        if (validatelogin()) {
            login(user).then((e) => {
                if (e instanceof Error) {
                    console.log(e);
                    errorContainer2.innerHTML = "Invalid username or password";
                } else {
                    setCookie("auth_token", e, 1)
                    window.location.href = "/";
                }
            });
        }
    }
}
if (document.getElementById("confirmsu")
) {
    document.getElementById("confirmsu").onclick = (event) => {
        event.preventDefault();
        if (validatesignup()) {
            const user = {
                username: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("pass1").value
            }
            signUp(user).then((e) => {
                if (e instanceof Error) {
                    console.log(e);
                    errorContainer.innerHTML = "Name or email already exists";
                } else {
                    setCookie("auth_token", e, 1)
                    window.location.href = "/";
                }
            });
        }
    }
}

//create group
if (window.location.pathname.includes("groups/create")) {
    if (document.getElementById("edit")) {
        document.getElementById("edit").style.display = 'none'
    }

    if (document.getElementById("edit-button")) {
        document.getElementById("edit-button").style.display = 'none';
    }

    if (document.getElementById("container")) {
        document.getElementById("container").style.textAlign = 'center';
    }


    if (document.getElementsByClassName("studentid").length === 0) {
        readStudents(getCookie("auth_token")).then((e) => {
            if (e instanceof Error) {
                console.log(e);
            } else {
                for (element of e) {
                    let student = document.createElement("li");
                    student.innerHTML = `<label> <input type="checkbox" value = ${element.id} id = "studentid" + ${element.id} class="studentid">  ${element.name} </label>`
                    document.getElementById("multiSelectDropdownElements").appendChild(student);
                }
            }
        })


    }

    if (document.getElementById("end-editing")) {
        document.getElementById("end-editing").onclick = (event) => {
            event.preventDefault();
            students = []
            for (const element of document.getElementsByClassName("studentid")) {
                if (element.checked) {
                    students.push(element.value)
                }
            }
            let group =
            {
                title: document.getElementById("title").value
                , description: document.getElementById("des").value
                , students: students
            }


            createGroup(getCookie("auth_token"), group).then((e) => {
                if (e instanceof Error) {
                    console.log(e);
                } else {
                    window.location.href = "/groups";
                }
            });
        }
    }
}

//create student
if (window.location.pathname.includes("students/create")) {
    if (document.getElementById("end-editing")) {
        document.getElementById("end-editing").onclick = (event) => {
            event.preventDefault();
            let student =
            {
                name: document.getElementById("sname").value
                , email: document.getElementById("email").value
                , studentid: document.getElementById("id").value
                , gpa: document.getElementById("gpa").value
            }
            console.log(student);
            createStudent(getCookie("auth_token"), student).then((e) => {
                if (e instanceof Error) {
                    console.log(e);
                } else {
                    window.location.href = "/students";
                }
            });
        }
    }
}

//edit student
if (window.location.pathname.includes("student/")) {

    if (document.getElementById("submitstudent")) {
        document.getElementById("submitstudent").onclick = (event) => {
            event.preventDefault();
            let student =
            {
                name: document.getElementById("sname").value
                , email: document.getElementById("email").value
                , studentid: document.getElementById("id").value
                , gpa: document.getElementById("gpa").value
            }
            console.log(getCookie("id"));
            updateStudentPartial(getCookie("auth_token"), 10, student).then((e) => {
                if (e instanceof Error) {
                    console.log(e);
                } else {
                    window.location.href = "/";
                }
            });

        }
    }
}

//edit group
if (window.location.pathname.includes("group/")) {

    if (document.getElementById("title")) {
        document.getElementById("title").disabled = true;
    }

    if (document.getElementById("end-editing")) {
        studentsNumInput = document.getElementById("student_num")
        titleInput = document.getElementById("title");
        descriptionInput = document.getElementById("des");
        studentsInput = document.getElementById("gpa");

        studentsNumInput.style.display = "flex";


        document.getElementById("end-editing").onclick = (event) => {
            event.preventDefault();
            let group =
            {
                title: title.value
                , description: des.value
                , students: [studentsInput.value]
            }
            updateGroupPartial(getCookie("auth_token"), 3, group).then((e) => {
                if (e instanceof Error) {
                    console.log(e);
                } else {
                    window.location.href = "/";
                }
            });
            console.log(document.getElementById("title").value);
        }
    }
}

//create message
if (window.location.pathname.includes("messages/create")) {

    if (document.getElementById("save-button")) {
        document.getElementById("save-button").onclick = (event) => {
            event.preventDefault();
            var content = document.getElementsByTagName("iframe")[0].contentWindow.document.body.innerHTML
            let message =
            {
                title: document.getElementById("area").value
                , content: content
            }

            createMessage(getCookie("auth_token"), message).then((e) => {
                if (e instanceof Error) {
                    console.log(e);
                } else {
                    window.location.href = "/messages";
                }
            });
        }
    }
}