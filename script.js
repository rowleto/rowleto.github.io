function CreateBio() {
    document.getElementById("about-box-inner").innerHTML = `
    <div class=\"info\">
        <h1>Bio</h1>
            <p>hi im rowleto</p>
            <p>i like programming, games, music, cats, dogs, beverages</p>
            <p>almost always online</p>
            <p>any pronouns he/him preferred</p>
        <a id=\"back\" href=\"javascript:void(0)\" class=\"about-box-redirect\">back</a>
    </div>`;
    document.getElementById("back").addEventListener("click", () => {
        CreateHome();
    });
    document.getElementById("about-box-outer").style.height = document.getElementById("about-box-inner").clientHeight + "px";
}

function CreateWorks() {
    document.getElementById("about-box-inner").innerHTML = `<div class=\"info\">
        <h1>Works</h1>
            <h3>apps</h3>
                <ul>
                    <li><a href='https://github.com/rowleto/TuneAssistant' target='_blank'>TuneAssistant - quick command line tool used to tag music files</a></li>
                </ul>
            <h3>maps</h3>
                <ul>
                    <li><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=2995135631' target='_blank'>gm_c2a5e_arena - port of a hl1 map to gmod</a></li>
                    <li><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=2878623219' target='_blank'>jb_flatsand - parody of flatgrass for jbmod</a></li>
                    <li><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=2437944842' target='_blank'>crossfire - unfinished csgo remake of the map crossfire from hl1 for deathmatch and arms race</a></li>
                    <li><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=2146041884' target='_blank'>carcrafter - a car customization map for half life alyx</a></li>
                </ul>
                
        <a id=\"back\" href=\"javascript:void(0)\" class=\"about-box-redirect\">back</a>
    </div>`;
    document.getElementById("back").addEventListener("click", () => {
        CreateHome();
    });
    document.getElementById("about-box-outer").style.height = document.getElementById("about-box-inner").clientHeight + "px";
}

function CreateContact() {
    document.getElementById("about-box-inner").innerHTML = `
    <div class=\"info\">
        <h1>Contact</h1>
        <ul>
            <li><a href='https://steamcommunity.com/id/rowleto/' target='_blank'>steam</a></li>
            <li><a href='https://twitter.com/rowleto' target='_blank'>twitter - private, accepts dms</a></li>
            <li>discord - rowleto</li>
        </ul>
        <a id=\"back\" href=\"javascript:void(0)\" class=\"about-box-redirect\">back</a>
    </div>`;
    document.getElementById("back").addEventListener("click", () => {
        CreateHome();
    });
    document.getElementById("about-box-outer").style.height = document.getElementById("about-box-inner").clientHeight + "px";
}

function CreateHome() {
    document.getElementById("about-box-inner").innerHTML = `
    <div class=\"col\">
        <img src=\"./rowleto.png\" alt=\"rowleto\" class=\"about-box-avatar\">
        <h1>rowleto</h1>
    </div>  
    <div class=\"col\">
        <a href=\"#\" class=\"about-box-redirect\" id=\"bio\">bio</a>
        <a href=\"#\" class=\"about-box-redirect\" id=\"works\">works</a>
        <a href=\"#\" class=\"about-box-redirect\" id=\"contact\">contact</a>
    </div>`;
    document.getElementById("bio").addEventListener("click", () => {
        CreateBio();
    });
    document.getElementById("works").addEventListener("click", () => {
        CreateWorks();
    });
    document.getElementById("contact").addEventListener("click", () => {
        CreateContact();
    });
    document.getElementById("about-box-outer").style.height = document.getElementById("about-box-inner").clientHeight + "px";
}

window.onload = (() => {
    
    document.getElementById("bio").addEventListener("click", () => {
        CreateBio();
    });
    document.getElementById("works").addEventListener("click", () => {
        CreateWorks();
    });
    document.getElementById("contact").addEventListener("click", () => {
        CreateContact();
    });
});
