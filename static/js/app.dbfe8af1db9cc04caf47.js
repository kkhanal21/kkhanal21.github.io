webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("Sazm"),i=a.n(s),r={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){i.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=i.a.auth().currentUser.email)},methods:{logout:function(){var t=this;i.a.auth().signOut().then(function(){t.$router.go({path:t.$router.path})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrapper green"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[t._v("Student Manager")]),t._v(" "),a("ul",{staticClass:"right"},[t.isLoggedIn?a("li",[a("span",{staticClass:"email black-text"},[t._v(t._s(t.currentUser))])]):t._e(),t._v(" "),t.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Dashboard")])],1):t._e(),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",[a("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),t.isLoggedIn?a("li",[a("button",{staticClass:"btn black",on:{click:function(e){t.logout()}}},[t._v("Logout")])]):t._e()])],1)])])},staticRenderFns:[]};var d={name:"App",components:{Navbar:a("VU/8")(r,o,!1,function(t){a("rKsv")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},u=a("VU/8")(d,l,!1,null,null,null).exports,c=a("/ocq"),m=(a("3VHS"),i.a.initializeApp({apiKey:"AIzaSyALfRGlNLgAQ9-_KaX4qmz6JpqgLygncz4",authDomain:"newfirebaseproject-531b5.firebaseapp.com",databaseURL:"https://newfirebaseproject-531b5.firebaseio.com",projectId:"newfirebaseproject-531b5",storageBucket:"newfirebaseproject-531b5.appspot.com",messagingSenderId:"120010635884"}).firestore()),v={name:"dashboard",data:function(){return{students:[]}},created:function(){var t=this;m.collection("student").orderBy("address").get().then(function(e){e.forEach(function(e){var a={id:e.id,student_id:e.data().student_id,student_name:e.data().student_name,address:e.data().address,contact_no:e.data().contact_no,email:e.data().email};t.students.push(a)})})}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[t._m(0),t._v(" "),t._l(t.students,function(e){return a("li",{key:e.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[t._v(t._s(e.address))]),t._v("\n            "+t._s(e.student_id)+":"+t._s(e.student_name)+"\n\n            "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-student",params:{student_id:e.student_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",[this._v("Students")])])}]},p=a("VU/8")(v,_,!1,null,null,null).exports,f={name:"new-student",data:function(){return{student_id:null,student_name:null,address:null,contact_no:null,email:null}},methods:{saveStudent:function(){var t=this;m.collection("student").add({student_id:this.student_id,student_name:this.student_name,address:this.address,contact_no:this.contact_no,email:this.email}).then(function(e){t.$router.push("/")}).catch(function(t){return console.log(err)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-student"}},[a("h3",[t._v("New Student")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveStudent(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.student_id,expression:"student_id"}],attrs:{type:"text",required:""},domProps:{value:t.student_id},on:{input:function(e){e.target.composing||(t.student_id=e.target.value)}}}),t._v(" "),a("label",[t._v("Student Id")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.student_name,expression:"student_name"}],attrs:{type:"text",required:""},domProps:{value:t.student_name},on:{input:function(e){e.target.composing||(t.student_name=e.target.value)}}}),t._v(" "),a("label",[t._v("Student Name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._v(" "),a("label",[t._v("Address")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact_no,expression:"contact_no"}],attrs:{type:"text",required:""},domProps:{value:t.contact_no},on:{input:function(e){e.target.composing||(t.contact_no=e.target.value)}}}),t._v(" "),a("label",[t._v("Contact No")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",[t._v("Email")])])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},g=a("VU/8")(f,h,!1,null,null,null).exports,w={name:"view-student",data:function(){return{student_id:null,student_name:null,address:null,contact_no:null,email:null}},beforeRouteEnter:function(t,e,a){m.collection("student").where("student_id","==",t.params.student_id).get().then(function(t){t.forEach(function(t){a(function(e){e.student_id=t.data().student_id,e.student_name=t.data().student_name,e.address=t.data().address,e.contact_no=t.data().contact_no,e.email=t.data().email})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;m.collection("student").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){t.student_id=e.data().student_id,t.student_name=e.data().student_name,t.address=e.data().address,t.contact_no=e.data().contact_no,t.email=e.data().email})})},deleteStudent:function(){var t=this;confirm("Are you sure?")&&m.collection("student").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-student"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.student_name)+"\n            ")])]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Student ID : "+t._s(t.student_id))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Name: "+t._s(t.student_name))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Address: "+t._s(t.address))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Email: "+t._s(t.email))]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Contact No: "+t._s(t.contact_no))])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn red",on:{click:function(e){t.deleteStudent()}}},[t._v("Delete")]),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-student",params:{student_id:t.student_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},b=a("VU/8")(w,C,!1,null,null,null).exports,x={name:"edit-student",data:function(){return{student_id:null,student_name:null,address:null,contact_no:null,email:null}},beforeRouteEnter:function(t,e,a){m.collection("student").where("student_id","==",t.params.student_id).get().then(function(t){t.forEach(function(t){a(function(e){e.student_id=t.data().student_id,e.student_name=t.data().student_name,e.address=t.data().address,e.contact_no=t.data().contact_no,e.email=t.data().email})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;m.collection("student").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){t.student_id=e.data().student_id,t.student_name=e.data().student_name,t.address=e.data().address,t.contact_no=e.data().contact_no,t.email=e.data().email})})},updateStudent:function(){var t=this;m.collection("student").where("student_id","==",this.$route.params.student_id).get().then(function(e){e.forEach(function(e){e.ref.update({student_id:t.student_id,student_name:t.student_name,address:t.address,contact_no:t.contact_no,email:t.email}).then(function(){t.$router.push({name:"view-student",params:{student_id:t.student_id}})})})})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-student"}},[a("h3",[t._v("Edit Student")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){e.preventDefault(),t.updateStudent()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.student_id,expression:"student_id"}],attrs:{type:"text",disabled:"",required:""},domProps:{value:t.student_id},on:{input:function(e){e.target.composing||(t.student_id=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.student_name,expression:"student_name"}],attrs:{type:"text",required:""},domProps:{value:t.student_name},on:{input:function(e){e.target.composing||(t.student_name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact_no,expression:"contact_no"}],attrs:{type:"text",required:""},domProps:{value:t.contact_no},on:{input:function(e){e.target.composing||(t.contact_no=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},E=a("VU/8")(x,y,!1,null,null,null).exports,k={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;i.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("You are logged in as "+t.email),e.$router.go({path:e.$router.path})},function(t){alert(t.message)}),t.preventDefault()}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green white-text center"},[a("h1",[t._v("Login")]),t._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:function(e){t.login()}}},[t._v("Login")])])])])])])])},staticRenderFns:[]},$=a("VU/8")(k,N,!1,null,null,null).exports,q={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;i.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Account created for "+t.email),e.$router.go({path:e.$router.path})},function(t){alert(t.message)}),t.preventDefault()}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h1",[t._v("Register")]),t._v(" "),a("form",[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:function(e){t.register()}}},[t._v("Register")])])])])])])])},staticRenderFns:[]},S=a("VU/8")(q,P,!1,null,null,null).exports;n.a.use(c.a);var A=new c.a({routes:[{path:"/",name:"dashboard",component:p,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:$,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:S,meta:{requiresGuest:!0}},{path:"/new",name:"new-student",component:g,meta:{requiresAuth:!0}},{path:"/edit/:student_id",name:"edit-student",component:E,meta:{requiresAuth:!0}},{path:"/:student_id",name:"view-student",component:b,meta:{requiresAuth:!0}}]});A.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?i.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&i.a.auth().currentUser?a({path:"/",query:{redirect:t.fullPath}}):a()});var U=A;n.a.config.productionTip=!1;var L=void 0;i.a.auth().onAuthStateChanged(function(t){L||(L=new n.a({el:"#app",router:U,components:{App:u},template:"<App/>"}))})},rKsv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dbfe8af1db9cc04caf47.js.map