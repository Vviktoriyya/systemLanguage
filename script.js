function displayLanguages() {
    const mainLanguage = navigator.language;
    const languages = navigator.languages;
    const languageList = document.getElementById('languages-list');

    console.log("Головна мова:", mainLanguage);
    console.log("Усі встановлені мови:", languages);
    
    languages.forEach(lang => {
        const listItem = document.createElement('li');
        listItem.textContent = lang;

        // жирний шрифт головної мови
        if (lang === languages[0]) {
            listItem.style.fontWeight = 'bold';
            console.log(listItem)
        }
        languageList.appendChild(listItem);
    });
}

displayLanguages();
