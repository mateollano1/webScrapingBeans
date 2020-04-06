const siteUrl = "https://www.lamayorista.com.co/";
const axios = require("axios");
const fetchData = async() => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};
const $ = await fetchData();
console.log("voy a inspec");

const postJobButton = $('. top> .action-post-job').text();
console.log(postJobButton) // Registra 'Publicar un trabajo'