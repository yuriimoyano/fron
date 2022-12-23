export async function login(email, password) {
    const res = await fetch("http://localhost:8080/api/login", {
      headers: {
        email: email,
        password: password,
      },
    });
  
    if (res.ok) {
      const document = await res.json();
      return document.token;
    } else {
      console.log("no autorizado");
      return null;
    }
  }
  
  export async function register(id,name,age,email, password) {
    const data = {
      client: {
        id:id,
        name:name,
        age:age,
        email: email,
        password: password,
      },
    };
    const res = await fetch("http://localhost:8080/api/client/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (res.ok) {
      const document = await res.json();
      return document;
    } else {
      return null;
    }
  }