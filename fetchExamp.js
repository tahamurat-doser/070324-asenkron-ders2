fetch("https://api.github.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Somthing went wrong ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    showUser(data);//&veriyi fonksiyonlara pas geçiyoruz 
  })
  .catch((err) => displayError(err)); //!hatayı basmak için bir fonksiyon yazıyorum

const showUser = (data) => {
  const userSection = document.getElementById("users");

  data.forEach((user) => {
    userSection.innerHTML += `
<h1>${user.login}</h1>

<img src="${user.avatar_url}" width="100px" />
<h2>${user.url}<h2>
`;
  });
};

const displayError = (err) => {
  const userSection = document.getElementById("users");
  userSection.innerHTML = `
    <h2>${err}</h2>
    <img src="./wrong-way-167535_1280.jpg" />
    
    
    `;
};
