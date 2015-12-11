/**
 * Module  which  sets the texts on the page and loads the  button's action
 */
var AppModule= function(dependencies){

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
     * Dependency list, this list is read by di-lite  to know  what dependencies  have to be inserted
     * The dependencies are separated  by ,
     * @property __dependencies
     * @type {String}
     * @private
     */
    var __dependencies="txtMoule";


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
     *   Sets  the  text and  the action of the module
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


    /**
     * Public part
     */
    return {

        /**
         *  This method is call  when  di-lite finished  loading   and setting all the dependencies.
         *  When this occurs the  injected dependencies  can be used  by  this module
         * @method ready
         * @public
         */
        ready: function(){
            __checkContract(this.txtMoule);
        },
        /**
         * List of dependencies  which is read by di-lite to  know which dependencies  have to be  injected
         * @property __idDivDisplay
         * @type {String}
         * @public
         */
        dependencies:__dependencies

    }
}
