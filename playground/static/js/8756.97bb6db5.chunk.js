/*! For license information please see 8756.97bb6db5.chunk.js.LICENSE.txt */
(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[8756],{8756:function(e,n,t){var i;self.MonacoEnvironment=(i={editorWorkerService:"editor.worker.js",json:"json.worker.js",typescript:"ts.worker.js",css:"css.worker.js",html:"html.worker.js",javascript:"ts.worker.js",less:"css.worker.js",scss:"css.worker.js",handlebars:"html.worker.js",razor:"html.worker.js"},{globalAPI:!1,getWorkerUrl:function(e,n){var s=t.p,r=(s?s.replace(/\/$/,"")+"/":"")+i[n];if(/^((http:)|(https:)|(file:)|(\/\/))/.test(r)){var o=String(window.location),a=o.substr(0,o.length-window.location.hash.length-window.location.search.length-window.location.pathname.length);if(r.substring(0,a.length)!==a){/^(\/\/)/.test(r)&&(r=window.location.protocol+r);var l=new Blob(["/*"+n+'*/importScripts("'+r+'");'],{type:"application/javascript"});return URL.createObjectURL(l)}}return r}}),t(4962),t(1997),t(7412),t(2041),t(5801),t(9803),t(3526),t(2432),t(6406),t(8617),t(7401),t(4285),t(5831),t(7638),t(2728),t(5134),t(5712),t(4988),t(6981),t(3999),t(9707),t(1831),t(6559),t(1366),t(8178),t(4803),t(2549),t(7674),t(4893),t(6504),t(1274),t(4741),t(6245),t(7347),t(7040),t(5169),t(6948),t(4209),t(5553),t(9136),t(2281),t(9090),t(2723),t(6420),t(2599),t(7705),t(3301),t(1134),t(1208),t(6079),t(1565),t(8576),e.exports=t(5380),t(8082),t(9852),t(4104),t(2166),t(2542),t(911),t(8710),t(8077),t(4736)},5380:function(e,n,t){"use strict";t.r(n),t.d(n,{CancellationTokenSource:function(){return i.CancellationTokenSource},Emitter:function(){return i.Emitter},KeyCode:function(){return i.KeyCode},KeyMod:function(){return i.KeyMod},MarkerSeverity:function(){return i.MarkerSeverity},MarkerTag:function(){return i.MarkerTag},Position:function(){return i.Position},Range:function(){return i.Range},Selection:function(){return i.Selection},SelectionDirection:function(){return i.SelectionDirection},Token:function(){return i.Token},Uri:function(){return i.Uri},__esModule:function(){return i.__esModule},editor:function(){return i.editor},languages:function(){return i.languages}});t(4104),t(911),t(8082),t(8077);var i=t(6599),s=t(6383);(0,s.H)({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:function(){return t.e(312).then(t.bind(t,312))}}),(0,s.H)({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:function(){return t.e(4877).then(t.bind(t,4877))}}),(0,s.H)({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:function(){return t.e(1074).then(t.bind(t,1074))}}),(0,s.H)({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:function(){return t.e(3766).then(t.bind(t,3766))}}),(0,s.H)({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:function(){return t.e(7499).then(t.bind(t,7499))}}),(0,s.H)({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:function(){return t.e(6717).then(t.bind(t,6717))}}),(0,s.H)({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:function(){return t.e(5133).then(t.bind(t,5133))}}),(0,s.H)({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:function(){return t.e(2611).then(t.bind(t,2611))}}),(0,s.H)({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:function(){return t.e(5419).then(t.bind(t,5419))}}),(0,s.H)({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:function(){return t.e(5419).then(t.bind(t,5419))}}),(0,s.H)({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:function(){return t.e(5571).then(t.bind(t,5571))}}),(0,s.H)({id:"csp",extensions:[],aliases:["CSP","csp"],loader:function(){return t.e(1022).then(t.bind(t,1022))}});t(2542);(0,s.H)({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:function(){return t.e(1690).then(t.bind(t,1690))}}),(0,s.H)({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:function(){return t.e(8861).then(t.bind(t,8861))}}),(0,s.H)({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:function(){return t.e(2402).then(t.bind(t,2402))}}),(0,s.H)({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:function(){return t.e(5540).then(t.bind(t,5540))}}),(0,s.H)({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:function(){return t.e(3955).then(t.bind(t,3955))}}),(0,s.H)({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:function(){return t.e(2880).then(t.bind(t,2880))}}),(0,s.H)({id:"go",extensions:[".go"],aliases:["Go"],loader:function(){return t.e(7299).then(t.bind(t,7299))}}),(0,s.H)({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:function(){return t.e(6403).then(t.bind(t,6403))}}),(0,s.H)({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:function(){return t.e(2526).then(t.bind(t,2526))}}),(0,s.H)({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:function(){return t.e(1619).then(t.bind(t,1619))}});t(8710);(0,s.H)({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:function(){return t.e(464).then(t.bind(t,464))}}),(0,s.H)({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:function(){return t.e(7615).then(t.bind(t,7615))}}),(0,s.H)({id:"javascript",extensions:[".js",".es6",".jsx",".mjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:function(){return t.e(5558).then(t.bind(t,5558))}}),(0,s.H)({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:function(){return t.e(9687).then(t.bind(t,9687))}}),(0,s.H)({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:function(){return t.e(254).then(t.bind(t,254))}}),(0,s.H)({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:function(){return t.e(2900).then(t.bind(t,2900))}}),(0,s.H)({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:function(){return t.e(7294).then(t.bind(t,7294))}}),(0,s.H)({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:function(){return t.e(1532).then(t.bind(t,1532))}}),(0,s.H)({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:function(){return t.e(2478).then(t.bind(t,2478))}}),(0,s.H)({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:function(){return t.e(3907).then(t.bind(t,3907))}});t(2166);(0,s.H)({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:function(){return t.e(7497).then(t.bind(t,7497))}}),(0,s.H)({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:function(){return t.e(9200).then(t.bind(t,9200))}}),(0,s.H)({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:function(){return t.e(9361).then(t.bind(t,9361))}}),(0,s.H)({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:function(){return t.e(7952).then(t.bind(t,7952))}}),(0,s.H)({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:function(){return t.e(3323).then(t.bind(t,3323))}}),(0,s.H)({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:function(){return t.e(1989).then(t.bind(t,1989))}}),(0,s.H)({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:function(){return t.e(5507).then(t.bind(t,5507))}}),(0,s.H)({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:function(){return t.e(907).then(t.bind(t,3016))}}),(0,s.H)({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:function(){return t.e(2909).then(t.bind(t,2909))}}),(0,s.H)({id:"pla",extensions:[".pla"],loader:function(){return t.e(8272).then(t.bind(t,8272))}}),(0,s.H)({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:function(){return t.e(8347).then(t.bind(t,8347))}}),(0,s.H)({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:function(){return t.e(4900).then(t.bind(t,4900))}}),(0,s.H)({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:function(){return t.e(52).then(t.bind(t,52))}}),(0,s.H)({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:function(){return t.e(9186).then(t.bind(t,9186))}}),(0,s.H)({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:function(){return t.e(369).then(t.bind(t,369))}}),(0,s.H)({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:function(){return t.e(5328).then(t.bind(t,5328))}}),(0,s.H)({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:function(){return t.e(6384).then(t.bind(t,6384))}}),(0,s.H)({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:function(){return t.e(8501).then(t.bind(t,8501))}}),(0,s.H)({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:function(){return t.e(1062).then(t.bind(t,1062))}}),(0,s.H)({id:"redis",extensions:[".redis"],aliases:["redis"],loader:function(){return t.e(608).then(t.bind(t,608))}}),(0,s.H)({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:function(){return t.e(2154).then(t.bind(t,2154))}}),(0,s.H)({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:function(){return t.e(3003).then(t.bind(t,3003))}}),(0,s.H)({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:function(){return t.e(3668).then(t.bind(t,3668))}}),(0,s.H)({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:function(){return t.e(9357).then(t.bind(t,9357))}}),(0,s.H)({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:function(){return t.e(9845).then(t.bind(t,9845))}}),(0,s.H)({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:function(){return t.e(651).then(t.bind(t,651))}}),(0,s.H)({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:function(){return t.e(6289).then(t.bind(t,6289))}}),(0,s.H)({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:function(){return t.e(3698).then(t.bind(t,3698))}}),(0,s.H)({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:function(){return t.e(9902).then(t.bind(t,9902))}}),(0,s.H)({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:function(){return t.e(7436).then(t.bind(t,7436))}}),(0,s.H)({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:function(){return t.e(1069).then(t.bind(t,1069))}}),(0,s.H)({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:function(){return t.e(7713).then(t.bind(t,7713))}}),(0,s.H)({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:function(){return t.e(4333).then(t.bind(t,4333))}}),(0,s.H)({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:function(){return t.e(1251).then(t.bind(t,1251))}}),(0,s.H)({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:function(){return t.e(6304).then(t.bind(t,6304))}}),(0,s.H)({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:function(){return t.e(4969).then(t.bind(t,4969))}}),(0,s.H)({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:function(){return t.e(4969).then(t.bind(t,4969))}}),(0,s.H)({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:function(){return t.e(839).then(t.bind(t,839))}}),(0,s.H)({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:function(){return t.e(1431).then(t.bind(t,1431))}});t(9852);(0,s.H)({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:function(){return t.e(4040).then(t.bind(t,4040))}}),(0,s.H)({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:function(){return t.e(9381).then(t.bind(t,9381))}});t(4736),t(7401),t(346),t(205),t(6680),t(1997),t(7412),t(2041),t(7705),t(5801),t(9803),t(3526),t(2432),t(6406),t(8617),t(4285),t(5831),t(2728),t(5134),t(5712),t(4988),t(7638),t(7674),t(9707),t(1831),t(6981),t(6559),t(4803),t(2549),t(8178),t(6504),t(1274),t(4741),t(6245),t(7347),t(7040),t(9136),t(2281),t(9090),t(2723);var r=t(5671),o=t(3144),a=t(136),l=t(9388),d=t(25),c=t(2381),u=t(7722),p=function(e){(0,a.Z)(t,e);var n=(0,l.Z)(t);function t(){return(0,r.Z)(this,t),n.call(this,{id:"editor.action.forceRetokenize",label:u.N("forceRetokenize","Developer: Force Retokenize"),alias:"Developer: Force Retokenize",precondition:void 0})}return(0,o.Z)(t,[{key:"run",value:function(e,n){if(n.hasModel()){var t=n.getModel();t.resetTokenization();var i=new d.G(!0);t.forceTokenization(t.getLineCount()),i.stop(),console.log("tokenization took ".concat(i.elapsed()))}}}]),t}(c.R6);(0,c.Qr)(p);t(2599),t(3301),t(1134),t(1208),t(6079),t(1565),t(8576),t(2742),t(8423),t(4962),t(1366),t(4893),t(6948),t(3999),t(4209),t(5169),t(5553),t(6420)}}]);
//# sourceMappingURL=8756.97bb6db5.chunk.js.map