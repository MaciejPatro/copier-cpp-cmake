"use strict";(self.webpackChunkcopier_cpp_cmake=self.webpackChunkcopier_cpp_cmake||[]).push([[12],{2639:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},l="copier configuration",o={unversionedId:"tutorial-basics/configuration",id:"tutorial-basics/configuration",title:"copier configuration",description:"Common configuration:",source:"@site/docs/tutorial-basics/configuration.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/configuration",permalink:"/copier-cpp-cmake/docs/tutorial-basics/configuration",draft:!1,editUrl:"https://github.com/MaciejPatro/copier-cpp-cmake/blob/master/website/docs/tutorial-basics/configuration.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/copier-cpp-cmake/docs/intro"}},d={},p=[{value:"Common configuration:",id:"common-configuration",level:2},{value:"Basic configuration defaults:",id:"basic-configuration-defaults",level:2},{value:"Expert configuration:",id:"expert-configuration",level:2}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"copier-configuration"},"copier configuration"),(0,r.kt)("h2",{id:"common-configuration"},"Common configuration:"),(0,r.kt)("p",null,"All users have to define following settings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"project_name")),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Name of your project e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"My New Project"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Testing Stuff"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"my-project"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"project_setup")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"basic")),(0,r.kt)("td",{parentName:"tr",align:null},"Choice of the project configuration you want to setup choices: ",(0,r.kt)("inlineCode",{parentName:"td"},"basic")," (reasonable defaults for simple projects), ",(0,r.kt)("inlineCode",{parentName:"td"},"expert")," (extensive setup with choices for testing framework, C++ standard, CI, static analysis, packaging etc.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"project_slug")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"slug")," from ",(0,r.kt)("inlineCode",{parentName:"td"},"project_name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"URL"),"-friendly version of ",(0,r.kt)("inlineCode",{parentName:"td"},"project_name")," used as the name for projects base directory and ",(0,r.kt)("inlineCode",{parentName:"td"},"library")," name if applicable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"project_type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"header-only")),(0,r.kt)("td",{parentName:"tr",align:null},"choices: ",(0,r.kt)("inlineCode",{parentName:"td"},"header-only library"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"single library"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"single executable"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"multi-library project"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"multi-library with executable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"license")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MIT License")),(0,r.kt)("td",{parentName:"tr",align:null},"Open source license for the project visible in ",(0,r.kt)("inlineCode",{parentName:"td"},"LICENSE")," file and source code comments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"license_owner")),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Owner of the license (author/you?)")))),(0,r.kt)("h2",{id:"basic-configuration-defaults"},"Basic configuration defaults:"),(0,r.kt)("p",null,"Settings that are automatically applied when ",(0,r.kt)("inlineCode",{parentName:"p"},"project_setup = basic"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cpp_standard")),(0,r.kt)("td",{parentName:"tr",align:null},"C++ standard set to ",(0,r.kt)("inlineCode",{parentName:"td"},"C++17"),". Current strategy is to default to 1 version behind the newest one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cmake_min_version")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimal supported CMake version ",(0,r.kt)("inlineCode",{parentName:"td"},"3.17")," as some configurations use features from this version. Strategy is to upgrade requirement only when newer features are used in template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"unit_testing")),(0,r.kt)("td",{parentName:"tr",align:null},"Unit testing framework for basic projects uses ",(0,r.kt)("inlineCode",{parentName:"td"},"GTest"))))),(0,r.kt)("h2",{id:"expert-configuration"},"Expert configuration:"),(0,r.kt)("p",null,"Available only when user chose ",(0,r.kt)("inlineCode",{parentName:"p"},"project_setup = expert"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cpp_standard")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C++17")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C++")," standard supported by project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cmake_min_version")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3.17")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimal CMake version needed by project - depending on what you want")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"unit_testing")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GTest")," for C++98, ",(0,r.kt)("inlineCode",{parentName:"td"},"doctest")," for newer standards"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit testing framework used in project (or ",(0,r.kt)("inlineCode",{parentName:"td"},"None"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ci_system")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"Generation of supported ",(0,r.kt)("inlineCode",{parentName:"td"},"ci")," workflow - currently supported are: ",(0,r.kt)("inlineCode",{parentName:"td"},"Gitlab")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Github"),". ",(0,r.kt)("em",{parentName:"td"},"Warning")," these use custom docker images which reciepes are available in template repository.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code_coverage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"Support for code coverage (enabled by cmake setting ",(0,r.kt)("inlineCode",{parentName:"td"},"-DWITH_COVERAGE=ON"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"include_what_you_use")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"Support for include-what-you-use-tool (enabled by cmake setting ",(0,r.kt)("inlineCode",{parentName:"td"},"-DWITH_IWYU=ON"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sanitize")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"No")),(0,r.kt)("td",{parentName:"tr",align:null},"Support for address and undefined behaviour sanitizers (enabled by cmake setting ",(0,r.kt)("inlineCode",{parentName:"td"},"-DWITH_SANITIZE=ON"),")")))))}s.isMDXComponent=!0}}]);