//costanti
const avaiableTypes=[
    ["Ossidi",0],
    ["Idrossidi",1],
    ["Ossidi basici",2],
    ["Anidridi",3]
];
//variabili
var doc;
var selectType;
var containerTypeList;
var closeMenu;
var executeButton;
var typeList;
var currentType;

/***
 * mostra il menu per scegliere le cose
 * @param open (boolean) se vero apre il menu, se falso lo chiude
 */
function showMenu(open){
    containerTypeList.removeAttribute("style");

    if(open){
        containerTypeList.setAttribute("style","display:block;");
    }else{
        containerTypeList.setAttribute("style","display:none;");
    }
}

/***
 * quando cliccato il pulsante calcola
 */
function sendRequest(type) {
    //todo
}

/***
 * quando modificato il tipo deve cambiare la descrizione
 */
function update(type){
    selectType.innerHTML=type[0];
    showMenu(false);
}

/***
 * chiamata quando si avvia il tutto
 */
function whenLoad() {
    doc=document;

    containerTypeList=doc.getElementById("typeSelection");
    containerTypeList.setAttribute("style","display:none;");

    selectType=doc.getElementById("selectInputType");
    selectType.addEventListener("click",()=>{
        showMenu(true)
    });

    closeMenu=doc.getElementById("closeMenu");
    closeMenu.addEventListener("click",()=>{
        showMenu(false)
    });

    executeButton=doc.getElementById("run");
    executeButton.addEventListener("click",()=>{
        sendRequest()
    });

    typeList=doc.getElementById("typeList");
    for(let i=0;i<avaiableTypes.length;i++){
        tmp=doc.createElement("li");
        tmp.setAttribute("class","list-group-item");
        tmp.addEventListener("click",()=>{
            currentType=avaiableTypes[i];
            update(currentType);
        });
        tmp.innerHTML=avaiableTypes[i][0];
        typeList.appendChild(tmp);
    }
    //todo
}

