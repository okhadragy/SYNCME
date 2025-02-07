if (window.location.pathname != '/login' && window.location.pathname != '/signup') {
    getcurrentuser(getCookie("auth_token")).then((e) => {
        if (e instanceof Error) {
            console.log(e);
        } else {
            if (window.location.pathname == '/') {
                if (document.getElementsByClassName("username")) {
                    document.getElementsByClassName("username")[0].innerHTML = e.user.username;
                }
                readGroups(getCookie("auth_token")).then((e) => {
                    if (e instanceof Error) {
                        console.log(e);
                    } else {
                        if (document.getElementById("grpnumber")) {
                            document.getElementById("grpnumber").innerHTML = e.length
                        }
                    }
                })
                readMessages(getCookie("auth_token")).then((e) => {
                    if (e instanceof Error) {
                        console.log(e);
                    } else {
                        if (document.getElementById("msgnumber")) {
                            document.getElementById("msgnumber").innerHTML = e.length
                        }
                    }
                })
                readStudents(getCookie("auth_token")).then((e) => {
                    if (e instanceof Error) {
                        console.log(e);
                    } else {
                        if (document.getElementById("stdnumber")) {
                            document.getElementById("stdnumber").innerHTML = e.length
                        }
                    }
                })
            }
            
            if (document.getElementsByClassName("profilename")) {
                document.getElementsByClassName("profilename")[0].innerHTML = e.user.username;
            }
        }
    })
}


if (document.getElementById("grptable")) {
    readGroups(getCookie("auth_token")).then((e) => {
        if (e instanceof Error) {
            console.log(e);
        } else {
            let groups = e;
            let c = 0;
            for (const element of groups) {
                let x = document.createElement("tr");
                x.id = "c" + c;
                document.getElementById("grptable").appendChild(x);

                for (let i = 0; i < 8; i++) {

                    let y = document.createElement("td");
                    document.getElementById("c" + c).appendChild(y);
                    switch (i) {
                        case 0:
                            y.innerHTML = c + 1;
                            y.classList.add('no')

                            break;
                        case 1: y.innerHTML = groups[c].title;
                            y.classList.add('title')
                            break;
                        case 2: y.innerHTML = groups[c].description;
                            break;
                        case 3: y.innerHTML = groups[c].students.length;
                            y.classList.add('no')
                            break;
                        case 4:
                            y.classList.add('studentslist')
                            for (let j = 0; j < groups[c].students.length; j++) {
                                let b = JSON.stringify(groups[c].students[j]);
                                getStudent(getCookie("auth_token"), b).then((e) => {
                                    if (e instanceof Error) {
                                        console.log(e);
                                    } else {
                                        y.innerHTML += e.name + '<br />';
                                    }
                                }
                                )
                            }
                            break;
                        case 5:
                            let a1 = document.createElement("a");
                            y.appendChild(a1);
                            let button1 = document.createElement("button");
                            button1.innerHTML = "info";
                            a1.href = `/group/${element.id}`;
                            a1.appendChild(button1);
                            break;
                        case 6:
                            let a2 = document.createElement("a");
                            let button2 = document.createElement("button");
                            button2.innerHTML = "add";
                            a2.href = '/groups/create';
                            y.appendChild(a2);
                            a2.appendChild(button2);
                            break;
                        case 7:

                            let a3 = document.createElement("a");
                            let button3 = document.createElement("button");
                            button3.innerHTML = "delete";
                            button3.onclick = () => {
                                deleteGroup(getCookie("auth_token"), element.id);
                            }
                            a3.href = '/groups';
                            y.appendChild(a3);
                            a3.appendChild(button3);
                            break;
                    }
                }
                c++;
            }
        }
    });


}
if (document.getElementById("studenttable")) {
    readStudents(getCookie("auth_token")).then((e) => {
        if (e instanceof Error) {
            console.log(e);
        } else {
            let students = e;
            let c = 0;
            readGroups(getCookie("auth_token")).then((groups) => {
                if (groups instanceof Error) {
                    console.log(groups);
                } else {
                    for (const element of students) {
                        let x = document.createElement("tr");
                        x.id = "c" + c;
                        document.getElementById("studenttable").appendChild(x);

                        for (let i = 0; i < 9; i++) {

                            let y = document.createElement("td");
                            document.getElementById("c" + c).appendChild(y);
                            switch (i) {
                                case 0: y.innerHTML = c + 1;
                                    break;
                                case 1: y.innerHTML = students[c].studentid;
                                    break;
                                case 2: y.innerHTML = students[c].name;
                                    break;
                                case 3:
                                    if (students[c].email == undefined) {
                                        y.innerHTML = students[c].studentid + "@eng.asu.edu.eg";
                                    }
                                    else {
                                        y.innerHTML = students[c].email;
                                    }
                                    break;
                                case 4:
                                    y.innerHTML = students[c].grade;
                                    y.classList.add("gpa");

                                    break;
                                case 5:
                                    y.classList.add("grouplist")

                                    for (let j = 0; j < groups.length; j++) {
                                        for (let k = 0; k < groups[j].students.length; k++) {
                                            console.log(groups[j].students[k]);
                                            if (element.id == groups[j].students[k]) {

                                                y.innerHTML += groups[j].title + "<br/>";
                                            }

                                        }
                                    }
                                    break;
                                case 6:

                                    let a1 = document.createElement("a");
                                    y.appendChild(a1);
                                    let button1 = document.createElement("button");
                                    button1.innerHTML = "info";
                                    a1.href = `/student/${element.id}`;
                                    a1.appendChild(button1);
                                    break;
                                case 7:

                                    let a2 = document.createElement("a");
                                    y.appendChild(a2);
                                    let button2 = document.createElement("button");
                                    button2.innerHTML = "add";
                                    a2.href = `/students/create`;
                                    a2.appendChild(button2);
                                    break;
                                case 8:
                                    let a3 = document.createElement("a");
                                    let button3 = document.createElement("button");
                                    button3.innerHTML = "delete";
                                    button3.onclick = () => {
                                        deleteStudent(getCookie("auth_token"), element.id);
                                    }
                                    a3.href = "/students";
                                    y.appendChild(a3);
                                    a3.appendChild(button3);
                                    break;
                            }
                        }



                        c++;
                    }
                }


            })
        }
    });


}

if (document.getElementById("messagetable")) {
    readMessages(getCookie("auth_token")).then((e) => {
        if (e instanceof Error) {
            console.log(e);
        } else {
            let groups = e;
            let c = 0;
            for (const element of groups) {
                let x = document.createElement("tr");
                x.id = "c" + c;
                document.getElementById("messagetable").appendChild(x);

                for (let i = 0; i < 8; i++) {

                    let y = document.createElement("td");
                    document.getElementById("c" + c).appendChild(y);
                    switch (i) {
                        case 0: y.innerHTML = c + 1;
                            break;
                        case 1: y.innerHTML = groups[c].title;
                            break;
                        case 2: y.innerHTML = groups[c].content;
                            break;
                        case 3: y.innerHTML = groups[c].groups;
                            break;
                        case 4:
                            for (let j = 0; j < groups[c].students.length; j++) {
                                let b = JSON.stringify(groups[c].students[j]);
                                getStudent(getCookie("auth_token"), b).then((e) => {
                                    if (e instanceof Error) {
                                        console.log(e);
                                    } else {
                                        y.innerHTML += e.name + "<br/>";
                                    }

                                }
                                )
                            }
                            break;
                        case 5:
                            
                            y.innerHTML = (groups[c].status == true?'<p class="status delivered">Sent</p>':'<p class="status sending">Draft</p>');
                           
                            break;
                            case 6:
                                let button2 = document.createElement("button");
                    
                                button2.classList.add("edit");
                                button2.title = "Send";
                                button2.innerHTML = `<id class = "fa fa-send" id = send_${c}></id>`
                                button2.onclick = (e)=>{
                                    pop.style.display = "block";  
                                }
                                y.appendChild(button2);
                
                            break;
                            case 7 :
                                let button3 = document.createElement("button");
                                
                                button3.classList.add("trash");
                                button3.title = "Delete";
                                button3.innerHTML = '<id class = "fa fa-trash"></id>'
                                button3.onclick = ()=>{
                                    deleteMessage(getCookie("auth_token"),element.id);
                                    window.location.href = '/messages'
                                }
                                y.appendChild(button3);

                    }
                }

                c++;
            }
        }
    });


}



