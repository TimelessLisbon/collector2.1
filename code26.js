gdjs.Percurso_32Sta_32CatarinaCode = {};
gdjs.Percurso_32Sta_32CatarinaCode.localVariables = [];
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1_1final = [];

gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1_1final = [];

gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects3= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2= [];
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects3= [];


gdjs.Percurso_32Sta_32CatarinaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23326948);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 0, 1);
}}

}


};gdjs.Percurso_32Sta_32CatarinaCode.userFunc0x14f8810 = function GDJSInlineCode(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Longitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${longitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32Sta_32CatarinaCode.userFunc0x14f8890 = function GDJSInlineCode(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Latitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${latitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32Sta_32CatarinaCode.mapOfGDgdjs_9546Percurso_959532Sta_959532CatarinaCode_9546GDpercursoObjects2Objects = Hashtable.newFrom({"percurso": gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2});
gdjs.Percurso_32Sta_32CatarinaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23350228);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32Sta_32CatarinaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23352420);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1);
/* Reuse gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1[i].hide();
}
}}

}


};gdjs.Percurso_32Sta_32CatarinaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23355260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);
/* Reuse gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.window.openURL((( gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1.length === 0 ) ? "" :gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1[0].getString()), runtimeScene);
}}

}


};gdjs.Percurso_32Sta_32CatarinaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5");
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23365980);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(6));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.Percurso_32Sta_32CatarinaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(35);
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1[i].setString("https://www.google.com/maps/place/Miradouro+de+Santa+Catarina,+1200-012+Lisboa/@38.7095753,-9.1482993,19z/data=!3m1!4b1!4m6!3m5!1s0xd193480f06596a3:0x96e9334cb717ce28!8m2!3d38.7095364!4d-9.1476043!16s%2Fg%2F11bw4hm49n?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(38.7091);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(38.7099);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-(9.1472));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(-(9.1480));
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1[i].setString("Sta Catarina");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32Sta_32CatarinaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(6));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 2;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() != "TESTE");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "Percurso Bica");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].SetLabelText("YES", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].SetLabelText("OUI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].SetLabelText("NON", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].SetLabelText("SI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].SetLabelText("NO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


gdjs.Percurso_32Sta_32CatarinaCode.userFunc0x14f8810(runtimeScene);

}


{


gdjs.Percurso_32Sta_32CatarinaCode.userFunc0x14f8890(runtimeScene);

}


{



}


{

gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length = 0;

gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1_1final.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2);
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2.length;i<l;++i) {
    if ( !(gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2[i].isVisible()) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2[k] = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32Sta_32CatarinaCode.mapOfGDgdjs_9546Percurso_959532Sta_959532CatarinaCode_9546GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1_1final.indexOf(gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2[j]) === -1 )
            gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1_1final.push(gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1_1final.indexOf(gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2[j]) === -1 )
            gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1_1final.push(gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps") >= 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1_1final, gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1);
gdjs.copyArray(gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1_1final, gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "maps2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps2") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Percurso_32Sta_32CatarinaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[k] = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[k] = gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32Sta_32CatarinaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[k] = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[k] = gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32Sta_32CatarinaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[k] = gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[k] = gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1_1final.indexOf(gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[j]) === -1 )
            gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1_1final.push(gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2[j]);
    }
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1_1final, gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(10).setString("");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
{ //Subevents
gdjs.Percurso_32Sta_32CatarinaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Percurso_32Sta_32CatarinaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects3.length = 0;

gdjs.Percurso_32Sta_32CatarinaCode.eventsList5(runtimeScene);
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnoObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDyesObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDGMObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDURLObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDfundopistagmObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDpistagmObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDdigitsObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32Sta_32CatarinaCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['Percurso_32Sta_32CatarinaCode'] = gdjs.Percurso_32Sta_32CatarinaCode;
