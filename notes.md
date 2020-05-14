what is jQuery?

CDN : content delivery network
--  is a url you use as an src for a script tag in your <head>
        this method is relient on internet connectivity and that th website is available


DOM: Document Object Model.
-- essentially is our broswer. it's the html we(the user) are interacting with 
        interacts with our code in a tree model(see imade below)
        (https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/1200px-DOM-model.svg.png)

## Selector

$()
* ID - `$("#idhere")`
* Class - `$(".classhere")`
* Decendants - `$("ul li")`
* Multiple elements - `$(".mic", ".check").append("test test")`
* Find elements - `$('#solid').find('.rock')`


## Dom Traversal 

* parent element - `$('.child').parent();
* first level children - `$('.parent').children()`
                can access other levels by adding on another .children or .parent it  goes by 1 level
parent ->
    child -> first level
        grandchild -> second
            great grandchild-> etc

##Dom Manipulation
(best practice is to change styles inside your .css file but can do it here)

.addClass - changes class of targeted thing in dom


## Getters and Setters 

.val();
.text();
.data();
.attr();


## Descendant selector

$('target id/class').on('click',descendant of target id/class, function)

