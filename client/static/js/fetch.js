
function getCookie(name) {
    const value = document.cookie;
    const parts = value.split('; ');
    for (const part of parts) {
        if (part.split('=')[0] == name) {
            return part.split('=')[1];
        }
    }
    return null;
}

function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";";
}

//////////////////////// AUTHENTICATION /////////////////////////////////
async function login(object) {
    try {

        let response = await fetch("http://127.0.0.1:8000/login/", { method: "POST", body: JSON.stringify(object), headers: { "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        let token = data.token;
        return token
    }
    catch (error) {
        return error;
    }

}

async function signUp(object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/signup/", { method: "POST", body: JSON.stringify(object), headers: { "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        let token = data.token;
        return token

    }
    catch (error) {
        return error;
    }
}

async function logout(token) {
    try {
        let response = await fetch("http://127.0.0.1:8000/logout/", { method: "GET", headers: { "authorization": "token " + token }})
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function getcurrentuser(token) {
    try {
        let response = await fetch("http://127.0.0.1:8000/getcurrentuser/", { method: "GET", headers: { "authorization": "token " + token }})
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}


///////////////////////// MESSAGE /////////////////////////////////
async function readMessages(token) {
    try {
        let response = await fetch("http://127.0.0.1:8000/messages/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function createMessage(token, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/messages/", { method: "POST", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function getMessage(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/messages/" + id + "/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateMessage(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/messages/" + id + "/", { method: "PUT", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateMessagePartial(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/messages/" + id + "/", { method: "PATCH", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function deleteMessage(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/messages/" + id + "/", { method: "DELETE", headers: { "authorization": "token " + token } })
        if (!response.ok) {
            let error = await response.json();
            throw new Error(JSON.stringify(error));
        }
        return "Successfully deleted";
    }
    catch (error) {
        return error;
    }
}

//////////////////////// SYSTEM /////////////////////////////////
async function readSystems(token) {
    try {
        let response = await fetch("http://127.0.0.1:8000/systems/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function createSystem(token, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/systems/", { method: "POST", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function getSystem(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/systems/" + id + "/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateSystem(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/systems/" + id + "/", { method: "PUT", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateSystemPartial(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/systems/" + id + "/", { method: "PATCH", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function deleteSystem(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/systems/" + id + "/", { method: "DELETE", headers: { "authorization": "token " + token } })
        if (!response.ok) {
            let error = await response.json();
            throw new Error(JSON.stringify(error));
        }
        return "Successfully deleted";
    }
    catch (error) {
        return error;
    }
}

//////////////////////// STUDENT /////////////////////////////////
async function readStudents(token) {
    try {
        let response = await fetch("http://127.0.0.1:8000/students/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function createStudent(token, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/students/", { method: "POST", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function getStudent(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/students/" + id + "/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateStudent(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/students/" + id + "/", { method: "PUT", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateStudentPartial(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/students/" + id + "/", { method: "PATCH", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function deleteStudent(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/students/" + id + "/", { method: "DELETE", headers: { "authorization": "token " + token } })
        if (!response.ok) {
            let error = await response.json();
            throw new Error(JSON.stringify(error));
        }
        return "Successfully deleted";
    }
    catch (error) {
        return error;
    }
}

//////////////////////// GROUP /////////////////////////////////
async function readGroups(token) {
    try {
        let response = await fetch("http://127.0.0.1:8000/groups/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function createGroup(token, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/groups/", { method: "POST", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function getGroup(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/groups/" + id + "/", { method: "Get", headers: { "authorization": "token " + token } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateGroup(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/groups/" + id + "/", { method: "PUT", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function updateGroupPartial(token, id, object) {
    try {
        let response = await fetch("http://127.0.0.1:8000/groups/" + id + "/", { method: "PATCH", body: JSON.stringify(object), headers: { "authorization": "token " + token, "Content-Type": "application/json" } })
        let data = await response.json();
        if (!response.ok) {
            throw new Error(JSON.stringify(data));
        }
        return data;
    }
    catch (error) {
        return error;
    }
}

async function deleteGroup(token, id) {
    try {
        let response = await fetch("http://127.0.0.1:8000/groups/" + id + "/", { method: "DELETE", headers: { "authorization": "token " + token } })
        if (!response.ok) {
            let error = await response.json();
            throw new Error(JSON.stringify(error));
        }
        return "Successfully deleted";
    }
    catch (error) {
        return error;
    }
}
