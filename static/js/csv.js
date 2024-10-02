let fa = [
    // replace the path value with your csv files path
    
    { path: "/static/details.csv", head: "CSV2" }
]
for (let i = 0; i < fa.length; i++) {
    document.querySelector("#nav").innerHTML += `
    ${fa[i].head}
    `;
    document.querySelector("body").innerHTML += `
    
    
    
    ${fa[i].head}
    
    
    
    
    `;
    fetch(fa[i].path)
        .then(res => res.text())
        .then(data => {
            let result = data.split(/\r?\n|\r/)
                .map(e => {
                    return e.split(",")
                        .map(td => td !== "" ? `${td}` : "")
                        .join("")
                        .split("\n")
                        .map(tr => tr !== "" ? `${tr}` : "")
                        .join("");
                })
            document.querySelector(`#tbody${i}`).innerHTML = result.join("");
            // console.log(result);
        })
}
