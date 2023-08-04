function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // Specify the language of your website
      includedLanguages: 'ar,zh-HK,en,fr,de,hi,it,zh-CN,pl,pt,pa,es,tl,ur', // Specify the languages you want to offer for translation
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    }, 'google_translate_element');
  }

  document.getElementById("exitButton").addEventListener("click", function() {
    
    // Perform Google search in the new tab
    var searchQuery = "weather today";
    var googleSearchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
    window.open(googleSearchUrl, "_blank");

    // Attempt to close the current tab
    window.close();

    // If the current tab could not be closed, redirect to Google homepage
    window.location.href = "https://www.google.com"
  });