# The  implementation  of an interface with  JS


Because JavaScript has no built-in way of creating or implementing interfaces, it's  difficult to  check if a object has  specific methods implemented. A good approach  it's shown on the book Pro JavaScript Design Patterns.
 By Dustin Diaz, Ross Harmes


```javascript
 // Definition of the interface (Global)
    var ILanguage= new Interface("ILanguage",["getFirstText","getSecondText"]);
});
```

The example shows the definition of the interface <b>ILanguage</b> which has two methods <b>getFirstText</b> and <b>getSecondText</b>.

Once the interface is defined,  it just needs to be called inside of the object which  wants to  check  and call  the methods of the interface.


```javascript
 var __checkContract= function(txtModuleCheck){

    Interface.ensureImplements(txtModuleCheck,ILanguage);
    __setData(txtModuleCheck,__idButton,__idDivDisplay);

 };
```

If the txtModuleCheck doesn't have  the two methods,  the interface will throw an exception.

Beside of the interface, the use of a DI is  a good idea .  [Di-Lite](https://github.com/NickQiZhu/di.js) is a good option, despite  having  to use  some specification inside of each  object or module which ties the implementation with the DI container.

For instance:

```javascript
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
        dependencies:"txtMoule"

    }
 };
```
The method <b>ready</b> is called after the DI  finished  inserting the dependency called <b>txtModule</b>. After  it, the object or module can use the dependency already injected. 


The other problem if that the attribute  call <b>dependencies</b> has to be defined , so each object can have these two dependencies  inside of the implementation.


The other  way  is to inject the dependency   through of the construct, but  the problem is that the inject won't be do by the DI container unless you use two different contexts  of the DI.


```javascript
     // Init of the DI of dependencies
    var contextDiDependency= di.createContext();
    contextDiDependency.register("txtSpanishMoule",SpanishTxtModule);
    contextDiDependency.register("txtEnglishMoule",EnglishTxtModule);
    contextDiDependency.initialize();

    // Init of the DI of the app
    var contextDiApp= di.createContext();
    // The dependency is injected  by the contextDiDependency
    var dependencies ={idBtn:"btn2_id",idDiv:"txt2_id",txtModule: contextDiDependency.get("txtSpanishMoule")};
   contextDiApp.register("appModuleConstructorSpanish",AppModuleConstructor,dependencies).factory(di.factory.func);
    // The dependency is injected  by the contextDiDependency
    var dependencies ={idBtn:"btn1_id",idDiv:"txt1_id",txtModule: contextDiDependency.get("txtEnglishMoule")};
   contextDiApp.register("appModuleConstructorEnglish",AppModuleConstructor,dependencies).factory(di.factory.func);
    contextDiApp.initialize();

    var implementSpanish= contextDiApp.get("appModuleConstructorSpanish");
    var implementEnglish= contextDiApp.get("appModuleConstructorEnglish");
```

