//= news__section/news__section.js

(function() {
    $(document).ready(function() {

        $(".share").jsSocials({
            showLabel: false,
            shareIn: "popup",
            shares: [{
                    share: "facebook",
                    logo: "/assets/img/facebookShare.svg",
                },
                {
                    share: "twitter",
                    logo: "/assets/img/twitterShare.svg",
                },
                {
                    share: "googleplus",
                    logo: "/assets/img/google-plus.svg",
                },
                {
                    share: "linkedin",
                    logo: "/assets/img/linkedin.svg",
                },
            ],

            // shares: ["twitter" "googleplus", "linkedin"]
        });

    });
})();