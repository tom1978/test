montageDefine("3f6310d","core/serialization/serializer/montage-labeler",{dependencies:["../../core","mousse/serialization/labeler"],factory:function(e,t){var n=e("../../core").Montage,r=e("mousse/serialization/labeler").Labeler;t.MontageLabeler=n.specialize.call(r,{_labelRegexp:{value:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/},constructor:{value:function(){r.call(this)}},getTemplatePropertyLabel:{value:function(e){var t=this.superForValue("getObjectLabel")(e);if(":"!==t[0])throw Error("Template property's labels need to start with a colon (:), (\""+t+'").');return t}},getObjectLabel:{value:function(e){var t=this.super(e);if(":"===t[0])throw Error('Labels starting with colon (:) can only be used for template properties, ("'+t+'").');return t}},getObjectName:{value:function(e){var t,i=e.identifier;return i&&this._labelRegexp.test(i)?t=e.identifier:"getInfoForObject"in e||"getInfoForObject"in e.constructor?(t=n.getInfoForObject(e).objectName,t=t.toLowerCase()):t=r.prototype.getObjectName.call(this,e),t}}})}});