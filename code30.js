gdjs.Bica_32EnigmaCode = {};
gdjs.Bica_32EnigmaCode.localVariables = [];
gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final = [];

gdjs.Bica_32EnigmaCode.GDclueObjects1_1final = [];

gdjs.Bica_32EnigmaCode.GDokObjects1= [];
gdjs.Bica_32EnigmaCode.GDokObjects2= [];
gdjs.Bica_32EnigmaCode.GDokObjects3= [];
gdjs.Bica_32EnigmaCode.GDokObjects4= [];
gdjs.Bica_32EnigmaCode.GDfundoObjects1= [];
gdjs.Bica_32EnigmaCode.GDfundoObjects2= [];
gdjs.Bica_32EnigmaCode.GDfundoObjects3= [];
gdjs.Bica_32EnigmaCode.GDfundoObjects4= [];
gdjs.Bica_32EnigmaCode.GDclueObjects1= [];
gdjs.Bica_32EnigmaCode.GDclueObjects2= [];
gdjs.Bica_32EnigmaCode.GDclueObjects3= [];
gdjs.Bica_32EnigmaCode.GDclueObjects4= [];
gdjs.Bica_32EnigmaCode.GDanswerObjects1= [];
gdjs.Bica_32EnigmaCode.GDanswerObjects2= [];
gdjs.Bica_32EnigmaCode.GDanswerObjects3= [];
gdjs.Bica_32EnigmaCode.GDanswerObjects4= [];
gdjs.Bica_32EnigmaCode.GDscoreObjects1= [];
gdjs.Bica_32EnigmaCode.GDscoreObjects2= [];
gdjs.Bica_32EnigmaCode.GDscoreObjects3= [];
gdjs.Bica_32EnigmaCode.GDscoreObjects4= [];
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1= [];
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects2= [];
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects3= [];
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects4= [];
gdjs.Bica_32EnigmaCode.GDURLObjects1= [];
gdjs.Bica_32EnigmaCode.GDURLObjects2= [];
gdjs.Bica_32EnigmaCode.GDURLObjects3= [];
gdjs.Bica_32EnigmaCode.GDURLObjects4= [];
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1= [];
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects2= [];
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects3= [];
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects4= [];
gdjs.Bica_32EnigmaCode.GDpistagmObjects1= [];
gdjs.Bica_32EnigmaCode.GDpistagmObjects2= [];
gdjs.Bica_32EnigmaCode.GDpistagmObjects3= [];
gdjs.Bica_32EnigmaCode.GDpistagmObjects4= [];
gdjs.Bica_32EnigmaCode.GDdigitsObjects1= [];
gdjs.Bica_32EnigmaCode.GDdigitsObjects2= [];
gdjs.Bica_32EnigmaCode.GDdigitsObjects3= [];
gdjs.Bica_32EnigmaCode.GDdigitsObjects4= [];
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects1= [];
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects2= [];
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects3= [];
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects4= [];
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects1= [];
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects2= [];
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects3= [];
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects4= [];
gdjs.Bica_32EnigmaCode.GDgmapsObjects1= [];
gdjs.Bica_32EnigmaCode.GDgmapsObjects2= [];
gdjs.Bica_32EnigmaCode.GDgmapsObjects3= [];
gdjs.Bica_32EnigmaCode.GDgmapsObjects4= [];


gdjs.Bica_32EnigmaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23371052);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField("Optional", "Easy", runtimeScene.getScene().getVariables().getFromIndex(10), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Bica_32EnigmaCode.GDfundoObjects2);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDfundoObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDfundoObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Bica_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


};gdjs.Bica_32EnigmaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23403348);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDanswerObjects1, gdjs.Bica_32EnigmaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.Bica_32EnigmaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.Bica_32EnigmaCode.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23404556);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bica_32EnigmaCode.asyncCallback23409252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Bica_32EnigmaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects3);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.Bica_32EnigmaCode.localVariables.length = 0;
}
gdjs.Bica_32EnigmaCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Bica_32EnigmaCode.localVariables);
for (const obj of gdjs.Bica_32EnigmaCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Bica_32EnigmaCode.asyncCallback23409252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Bica_32EnigmaCode.asyncCallback23411860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Bica_32EnigmaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.Bica_32EnigmaCode.localVariables.length = 0;
}
gdjs.Bica_32EnigmaCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Bica_32EnigmaCode.localVariables);
for (const obj of gdjs.Bica_32EnigmaCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Bica_32EnigmaCode.asyncCallback23411860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Bica_32EnigmaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23407188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects2);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Bica_32EnigmaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1, gdjs.Bica_32EnigmaCode.GDclueObjects3);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects3.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects3[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1, gdjs.Bica_32EnigmaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 12);
}
}}

}


};gdjs.Bica_32EnigmaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1, gdjs.Bica_32EnigmaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23419436);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1, gdjs.Bica_32EnigmaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Bica_32EnigmaCode.GDclueObjects1 */
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 16);
}
}}

}


};gdjs.Bica_32EnigmaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23420692);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1, gdjs.Bica_32EnigmaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Bica_32EnigmaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1, gdjs.Bica_32EnigmaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 8);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Bica_32EnigmaCode.GDclueObjects1 */
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects1[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 20);
}
}}

}


};gdjs.Bica_32EnigmaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23428580);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1, gdjs.Bica_32EnigmaCode.GDclueObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects2[i].setAnimation(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() + 8);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Bica_32EnigmaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23436092);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23439324);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23441500);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23445060);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDanswerObjects1, gdjs.Bica_32EnigmaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects2[i].setText("CORRECTO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Bica_32EnigmaCode.GDanswerObjects1 */
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.Bica_32EnigmaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23450428);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23457044);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23458620);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23460188);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23461476);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23452572);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 2);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 4);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() < 6);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 6);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList20(runtimeScene);} //End of subevents
}

}


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
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1[0].getBehavior("Text").getText()), false);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23513260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


};gdjs.Bica_32EnigmaCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23521140);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.Bica_32EnigmaCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23523508);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


};gdjs.Bica_32EnigmaCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(21);
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1[i].setString("Bica Fim");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("DUARTE BELO");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Bica_32EnigmaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Bica_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Bica_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().getFromIndex(6), runtimeScene.getScene().getVariables().getFromIndex(5));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().getFromIndex(9), runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bica_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDscoreObjects1[i].setString("00" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bica_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDscoreObjects1[i].setString("0" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 100);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bica_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDscoreObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) != "S. Pedro Alcantara Enigma");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Bica_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.runtimeScene.getSceneName(runtimeScene) == "S. Pedro Alcantara Enigma");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].getText())));
}
}}

}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Bica_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Bica_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDclueObjects1[k] = gdjs.Bica_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDokObjects1[k] = gdjs.Bica_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDanswerObjects1[k] = gdjs.Bica_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].getText() != runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDanswerObjects1[k] = gdjs.Bica_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( !((gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].getText()).includes(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString())) ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDanswerObjects1[k] = gdjs.Bica_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 3);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 5);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() >= 7);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Bica_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDclueObjects1[k] = gdjs.Bica_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDokObjects1[k] = gdjs.Bica_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Bica_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.Bica_32EnigmaCode.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Bica_32EnigmaCode.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDclueObjects2[k] = gdjs.Bica_32EnigmaCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Bica_32EnigmaCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Bica_32EnigmaCode.GDclueObjects1_1final.indexOf(gdjs.Bica_32EnigmaCode.GDclueObjects2[j]) === -1 )
            gdjs.Bica_32EnigmaCode.GDclueObjects1_1final.push(gdjs.Bica_32EnigmaCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDclueObjects1_1final, gdjs.Bica_32EnigmaCode.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Bica_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDclueObjects1[k] = gdjs.Bica_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "digits") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Bica_32EnigmaCode.GDdigitsObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDdigitsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Bica_32EnigmaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Bica_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDdigitsObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDdigitsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDdigitsObjects1[k] = gdjs.Bica_32EnigmaCode.GDdigitsObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDdigitsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDokObjects1[k] = gdjs.Bica_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Bica_32EnigmaCode.GDdigitsObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Bica_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Bica_32EnigmaCode.GDokObjects1);
gdjs.Bica_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Bica_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDclueObjects1[k] = gdjs.Bica_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDokObjects1[k] = gdjs.Bica_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDanswerObjects2[k] = gdjs.Bica_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Bica_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Bica_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDanswerObjects2[i].getText() == runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + " " ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDanswerObjects2[k] = gdjs.Bica_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Bica_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Bica_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( (gdjs.Bica_32EnigmaCode.GDanswerObjects2[i].getText()).includes(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString()) ) {
        isConditionTrue_1 = true;
        gdjs.Bica_32EnigmaCode.GDanswerObjects2[k] = gdjs.Bica_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Bica_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Bica_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Bica_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Bica_32EnigmaCode.GDanswerObjects1_1final, gdjs.Bica_32EnigmaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsString() == gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().getFromIndex(6).setString("");
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList21(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Bica_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("");
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList22(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() != "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().getFromIndex(5));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Bica_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].setY(575 - (gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Bica_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bica_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Bica_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bica_32EnigmaCode.GDokObjects1[k] = gdjs.Bica_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Bica_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Bica_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Bica_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bica_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Bica_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("");
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{ //Subevents
gdjs.Bica_32EnigmaCode.eventsList24(runtimeScene);} //End of subevents
}

}


};

gdjs.Bica_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Bica_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDokObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDokObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects4.length = 0;

gdjs.Bica_32EnigmaCode.eventsList25(runtimeScene);
gdjs.Bica_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDokObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDokObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDfundoObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDclueObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDanswerObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDscoreObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDnext_9595sceneObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDURLObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDfundopistagmObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDpistagmObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDdigitsObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDlocal_9595erradoObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDtask_9595confirmationObjects4.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects1.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects2.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects3.length = 0;
gdjs.Bica_32EnigmaCode.GDgmapsObjects4.length = 0;


return;

}

gdjs['Bica_32EnigmaCode'] = gdjs.Bica_32EnigmaCode;
