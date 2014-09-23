montageDefine("3f6310d","core/serialization/deserializer/montage-deserializer",{dependencies:["../../core","mousse/deserialization/interpreter","mousse/deserialization/deserializer","./montage-interpreter","./montage-reviver","../../promise","../../jshint","../../logger"],factory:function(e,t){var n=e("../../core").Montage;e("mousse/deserialization/interpreter").Interpreter;var r=e("mousse/deserialization/deserializer").Deserializer,i=e("./montage-interpreter").MontageInterpreter,a=e("./montage-reviver").MontageReviver,o=e("../../promise").Promise,s=e("../../jshint").JSHINT;e("../../logger").logger("montage-deserializer");var l=n.specialize.call(r,{_interpreter:{value:null},_serializationString:{value:null},_serialization:{value:null},init:{value:function(e,t,n){if(!this.isSerializationStringValid(e))throw Error(this._formatSerializationSyntaxError(e));return r.call(this,e),this._origin,this._serialization=null,this._interpreter=(new i).init(t,n),this}},serialization:{get:function(){var e=this._serialization;return e||(e=JSON.parse(this._serializationString),this._serialization=e),e}},deserialize:{value:function(e,t){var n;try{n=JSON.parse(this._serializationString)}catch(r){return o.reject(r)}return this._interpreter.instantiate(n,e,t)}},preloadModules:{value:function(){var e=JSON.parse(this._serializationString);return this._interpreter.preloadModules(e)}},getExternalObjectLabels:{value:function(){var e=this.serialization,t=[];for(var n in e)0===Object.keys(e[n]).length&&t.push(n);return t}},isSerializationStringValid:{value:function(e){try{return JSON.parse(e),!0}catch(t){return!1}}},_formatSerializationSyntaxError:{value:function(e){var t,n,r,i,a,o="   ",l=this._origin;if(s(e))t="Syntax error in the serialization but not able to find it!\n"+e;else{n=s.errors[0],r=e.split("\n"),i=(o+r.length).length,a=n.line-1;for(var u=0,c=r.length;c>u;u++)r[u]=Array(i-(u+1+"").length+1).join(u===a?">":" ")+(u+1)+" "+r[u];t="Syntax error at line "+n.line+(l?" from "+l:"")+":\n"+n.evidence+"\n"+n.reason+"\n"+r.join("\n")}return t}}},{defineDeserializationUnit:{value:function(e,t){a.defineUnitReviver(e,t)}}});t.MontageDeserializer=l,t.deserialize=function(e,t){return(new l).init(e,t).deserializeObject()}}});