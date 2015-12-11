/**
 * Module  which  sets the texts on the page and loads the  button's action
 */
var AppModuleConstructor= function(dependencies){

    /**
     * Html id of the button
     * @property __idButton
     * @type {String}
     * @private
     */
    var  __idButton=dependencies.idBtn;
    /**
     * Html id where the  message is shown
     * @property __idDivDisplay
     * @type {String}
     * @private
     */
    var  __idDivDisplay=dependencies.idDiv;
    /**
     * Module which has to fulfill  the contract
     * @property __txtModule
     * @type {Module}
     * @private
     */
    var __txtModule=dependencies.txtModule;



    /**
     *  Checks  the contract ILanguage, ILanguage has to have two methods ["getFirstText","getSecondText"]
     *  If the module fulfills  the contract, the flow will continue
     * @method __checkContract
     * @param txtModuleCheck{Object} Module that has to be checked
     * @private
     */
    var __checkContract= function(txtModuleCheck){

        Interface.ensureImplements(txtModuleCheck,ILanguage);
        __setData(txtModuleCheck,__idButton,__idDivDisplay);

    };


    /**
     *  Sets  the  text and  the action of the module
     * @method __setData
     * @param txtModule{Object} Module which has  the text and  fulfill the contract
     * @param idBtn{String} id button
     * @param idDiv{String} id div  where  a text will be shown
     * @private
     */
    var __setData= function(txtModule,idBtn,idDiv){

        __setTxtButton(idBtn,txtModule.getFirstText());
        __setActionButton(idBtn,txtModule.getSecondText(),idDiv);

    };

    /**
     *  Sets the value of the button
     * @method __setTxtButton
     * @param idBtn{String} id button
     * @param txt{String} text to show on the button
     * @private
     */
    var  __setTxtButton=function(idBtn,txt){

        var btn=document.getElementById(idBtn);
        btn.value=txt;

    };

    /**
     *  Sets the action of the button, this button   triggers   change of the a text
     * @method __setActionButton
     * @param idBtn{String} id button
     * @param txt{String} text to show  where the button is clicked
     * @param idDiv{String} div where the text will be changed
     * @private
     */
    var __setActionButton=function(idBtn,txt,idDiv){

        var btn= document.getElementById(idBtn);
        btn.onclick=function(){
            var div= document.getElementById(idDiv);
            div.innerHTML=txt;
        }

    };

    //This is the first method that is called
    __checkContract(__txtModule);
    /**
     * In order to  di-lite works fine,  the return    has to  exist
     */
    return {

     //it's not needed  because di-lite  checks if  the attribute exist, if it doesn't  di-lite assumes  that the module has no dependencies
    //dependencies:""

    }
}
