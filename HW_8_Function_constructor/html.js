
function HtmlElement(tagName,IsSelfClosing,textContent){
    let _tagName=tagName;
    let _isSelfClosing=IsSelfClosing;
    let _tagStr="";
    let _textContent=textContent;
    let _atributeStr="";
    let _styleStr="";
    let _innerStartTag="";
    let _innerEndtTag="";
    let _style={
        "width:":"",
        "height:":"",
        "border:":"",
        "margin:":"",
        "display:":"",
        "text-align:":"",
    };
  
    let _attribute={
        "src:":"",
        "alt:":"",
        "href:":"",
        "alt:":"",
        "id:":"",
        "target:":"",
        "class:":"",
    };
    //#region /*----Methods----*/

   
    this.SetStyle=(key,value)=>{
        _style[key+":"]=value;
        _styleStr+=`${key+":"+_style[key+":"]+";"}`;
    };
    this.SeAttribute=(key,value)=>{

        _attribute[key+":"]=value;
    
        _atributeStr+=`${key+":".replace(/.{0,1}$/,"=")+"\""+_attribute[key+":"]+"\""+" "}`;
    };
    let _createTag=()=>{
        if(_isSelfClosing){
            _tagStr= `<${_tagName} style="${_styleStr}" ${_atributeStr} />`;
        }else{
            _tagStr= `<${_tagName} style="${_styleStr}" ${_atributeStr} >${_innerStartTag} ${_textContent} ${_innerEndtTag}</${_tagName}>`;
        }
            
    }
    this.AddNestedElementStart=(tag)=>{
        _innerStartTag+=tag.GetHtml();
      
    }
    this.AddNestedElementEnd=(tag)=>{
        _innerEndtTag+=tag.GetHtml();
    }
    this.GetHtml=()=>{
        _createTag();
         return  _tagStr;
    };
   
    //#endregion
    return this;
}
let wrapper=new HtmlElement("div",false,"");
wrapper.SetStyle("display","flex");
wrapper.SeAttribute("id","wrapper");
let divImg=new HtmlElement("div",false,"");
divImg.SetStyle("width","300px");
divImg.SetStyle("margin","10px");
let H3=new HtmlElement("h3",false,"What is Lorem Ipsum");
let img=new HtmlElement("img",true,"");
img.SetStyle("width","100%");
img.SeAttribute("src","./imgSrc/lipsum.jpg");
img.SeAttribute("alt","Lorem Ipsum");
let P=new HtmlElement("p",false,`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book.`);
P.SetStyle("text-align","jistify");
let A=new HtmlElement("a",false,"More...")
A.SeAttribute("href","https://www.lipsum.com");
A.SeAttribute("target","_blank");
P.AddNestedElementEnd(A);
divImg.AddNestedElementStart(H3);
divImg.AddNestedElementEnd(img);
divImg.AddNestedElementEnd(P);
wrapper.AddNestedElementStart(divImg);
wrapper.AddNestedElementEnd(divImg);
document.write(wrapper.GetHtml());
