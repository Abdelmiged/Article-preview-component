let shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", displayShareTab);

let displayed = false;

function displayShareTab() {
    if(!displayed) {
        if(window.innerWidth < 1440) {
            createShareTabWindow("small");
        }
        else {
            createShareTabWindow("large");
        }
    }
    else {
        if(window.innerWidth < 1440) {
            removeShareTab("small");
        }
        else {
            removeShareTab("large");
        }
    }
}


function createMainDiv(size) {
    let classes = [];
    if(size === "small")
        classes = "share-container absolute left-0 py-4 px-8 w-full h-[21.8%] bg-[--custom-clr-dark-grayish-blue] rounded-[inherit] flex items-center justify-between".split(" ");
    else {
        classes = "share-container absolute top-[-90px] left-[-105px] py-4 px-8 w-[15rem] h-[3.5rem] bg-[--custom-clr-dark-grayish-blue] rounded-lg flex items-center justify-between".split(" ");
    }

    let shareTabMainDiv = document.createElement("div");

    classes.forEach((item) => {
        shareTabMainDiv.classList.add(item);
    });

    return shareTabMainDiv;
}

function createSubDiv() {
    let shareTabSubDiv = document.createElement("div");

    shareTabSubDiv.classList.add("wrapper", "flex", "items-center");

    return shareTabSubDiv;
}

function createSubDivSpan() {
    let subDivSpan = document.createElement("span");

    let subDivSpanClasses = "uppercase tracking-[.3rem] text-[--custom-clr-desaturated-dark-blue] font-medium".split(" ");

    subDivSpanClasses.forEach((item) => {
        subDivSpan.classList.add(item);
    })

    subDivSpan.textContent = "share";

    return subDivSpan;
}

function createSocialMediaSubDiv() {
    let socialMediaDiv = document.createElement("div");

    let socialMediaDivClasses = "social-media-container flex justify-between items-center [&>*]:ml-4".split(" ");

    socialMediaDivClasses.forEach((item) => {
        socialMediaDiv.classList.add(item);
    })

    return socialMediaDiv;
}

function createSocialMediaIcons() {
    let imagePath = ["images/icon-facebook.svg", "images/icon-twitter.svg", "images/icon-pinterest.svg"];
    let icons = [];

    for(let i = 0; i < 3; i++) {
        let socialMediaIcon = document.createElement("img");

        socialMediaIcon.setAttribute("src", imagePath[i]);
        socialMediaIcon.setAttribute("alt", "");

        icons.push(socialMediaIcon);
    }

    return icons;
}

function createToolTip() {
    let toolTipClasses = "tool-tip absolute top-[73%] left-[50%] -translate-x-1/2 w-16 h-[1.8rem] bg-[--custom-clr-dark-grayish-blue]".split(" ");

    let toolTip = document.createElement("span");

    toolTipClasses.forEach((item) => {
        toolTip.classList.add(item);
    })

    return toolTip;
}

function createShareTabWindow(size) {
    // main Div
    let mainDiv = createMainDiv(size);

    // Sub Div
    let subDiv = createSubDiv();

    // Sub Div Span
    let subDivSpan = createSubDivSpan();

    // Social Media Sub Div
    let socialMediaDiv = createSocialMediaSubDiv();

    // Social Media Icons
    let socialMediaIcons = createSocialMediaIcons();

    for(let i = 0; i < socialMediaIcons.length; i++) {
        socialMediaDiv.appendChild(socialMediaIcons[i]);
    }

    subDiv.appendChild(subDivSpan);
    subDiv.appendChild(socialMediaDiv);
    mainDiv.appendChild(subDiv);

    if(size === "small") {
        let p = document.querySelector("p");
        mainDiv.appendChild(shareButton);
        p.insertAdjacentElement("afterend", mainDiv);
    }
    else {
        let buttonclr = "hsl(214, 17%, 51%)";
        mainDiv.appendChild(createToolTip());
        shareButton.prepend(mainDiv);
        shareButton.style.backgroundColor = buttonclr;
        document.querySelector(".share-button > img").style.setProperty("filter", "brightness(0%) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(357deg) brightness(109%) contrast(101%)");
    }

    displayed = true;
}

function removeShareTab(size) {
    if(size === "small") {
        let p = document.querySelector("p");
        let authorContainer = document.querySelector(".author-container");
        authorContainer.appendChild(shareButton);
        p.nextElementSibling.remove();
    }
    else {
        let shareTab = shareButton.querySelector(".share-container");
        shareTab.remove();
        shareButton.style.removeProperty("background-color");
        document.querySelector(".share-button > img").style.removeProperty("filter");
    }

    displayed = false;
}