gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode = {};
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.localVariables = [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final = [];

gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1_1final = [];

gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects3= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects1= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects2= [];
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects3= [];


gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "digits");
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19549828);
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


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19569372);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1, gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19571068);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.asyncCallback19574804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects3);

{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.localVariables.length = 0;
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.localVariables);
for (const obj of gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.asyncCallback19574804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.asyncCallback19576668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.localVariables.length = 0;
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.localVariables);
for (const obj of gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.asyncCallback19576668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19573124);
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19579052);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19581012);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19582892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19584756);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19587996);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19587844);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19592884);
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
gdjs.copyArray(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1, gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i].setText("CORRECTO");
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
/* Reuse gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1 */
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19596988);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19601092);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19602340);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19603572);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19604652);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19598676);
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList14(runtimeScene);} //End of subevents
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList15(runtimeScene);} //End of subevents
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 6;
if (isConditionTrue_0) {

{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList17(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19642092);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19647724);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19649836);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList22 = function(runtimeScene) {

{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1[i].setString("S. Pedro Alcantara Fim");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("846");
}{runtimeScene.getScene().getVariables().get("length").setNumber(gdjs.evtTools.string.strLen((( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[0].getText())));
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 4);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("length")) != 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("digits").setNumber(1);
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("length")) == 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("digits").setNumber(0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].getWidth())) / 2);
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList1(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].getText())));
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

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("digits")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( !((gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].getText()).includes(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")))) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length = k;
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList2(runtimeScene);} //End of subevents
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList5(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList6(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 4);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList7(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 8);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1_1final.indexOf(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2[j]) === -1 )
            gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1_1final.push(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1_1final, gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "digits") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("digits").setNumber(0);
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1);
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( (gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i].getText()).includes(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer"))) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1_1final, gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList12(runtimeScene);} //End of subevents
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList13(runtimeScene);} //End of subevents
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
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList18(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList19(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")));
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].setY(575 - (gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[k] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}
{ //Subevents
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList21(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects3.length = 0;

gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.eventsList22(runtimeScene);
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDokObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['S_46_32Pedro_32Alcantara_32EnigmaCode'] = gdjs.S_46_32Pedro_32Alcantara_32EnigmaCode;
