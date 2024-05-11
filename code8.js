gdjs.S_46_32Roque_32Cruzadas_321Code = {};
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final = [];

gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1_1final = [];

gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDURLObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDURLObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDURLObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDlocal_9595erradoObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDlocal_9595erradoObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDlocal_9595erradoObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDtask_9595confirmationObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDtask_9595confirmationObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDtask_9595confirmationObjects3= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDgmapsObjects1= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDgmapsObjects2= [];
gdjs.S_46_32Roque_32Cruzadas_321Code.GDgmapsObjects3= [];


gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_amarela"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_azul"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_castanha"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_rosa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_roxa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_verde"));
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logout", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14003252);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14007732);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1, gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length === 0 ) ? "" :gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13954988);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.asyncCallback13884580 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects3);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects3.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}}
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32Roque_32Cruzadas_321Code.asyncCallback13884580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.asyncCallback13911820 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}}
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32Roque_32Cruzadas_321Code.asyncCallback13911820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13742764);
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
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13881244);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13765660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13787716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13585884);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13724924);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13398596);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11618524);
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
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1, gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i].setText("CORRECTO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1 */
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13373092);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13409100);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13410244);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13411404);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13013356);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13194068);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) < 2;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) < 4;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) < 6;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 6;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5";
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13358844);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13490108);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13612772);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList22 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("UID_atual").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(7);
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1[i].setString("S. Roque Cruzadas 2");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("CAUTELEIRO");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{runtimeScene.getScene().getVariables().get("digits").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().get("language"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("language")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].getText())));
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

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("digits")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length;i<l;++i) {
    if ( !((gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].getText()).includes(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")))) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 5;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 7;
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
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 4);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 8);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1_1final, gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "digits") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("digits").setNumber(0);
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1);
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length;i<l;++i) {
    if ( (gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i].getText()).includes(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer"))) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final.push(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1_1final, gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList13(runtimeScene);} //End of subevents
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
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList18(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList19(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().get("clueGM"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")) != "";
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cluegiven")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")));
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].setY(575 - (gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[k] = gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}
{ //Subevents
gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList21(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Roque_32Cruzadas_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDokObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDclueObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDanswerObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDpistagmObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDdigitsObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDgmapsObjects1.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDgmapsObjects2.length = 0;
gdjs.S_46_32Roque_32Cruzadas_321Code.GDgmapsObjects3.length = 0;

gdjs.S_46_32Roque_32Cruzadas_321Code.eventsList22(runtimeScene);

return;

}

gdjs['S_46_32Roque_32Cruzadas_321Code'] = gdjs.S_46_32Roque_32Cruzadas_321Code;
