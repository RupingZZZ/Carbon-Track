import ajax from "./ajax";
const BASE='http://136e61e8.ngrok.io/';


export const reLogin = (Email,passWord)=>ajax(BASE+'/appLogin.php',{Email,passWord},)

export const reqScore =(Email)=>ajax(BASE +'/appDisplayTarget.php',{Email})

export const reqMaxScore = (Email,TargetPoint)=>ajax(BASE+'appSetTarget.php',{Email,TargetPoint})

export const reqUserName = (Email)=>ajax(BASE+'appUserName.php',{Email})

export  const reqNowScore =(Email) =>ajax(BASE+'appPoint.php',{Email})

export const  reqAllUser = () => ajax(BASE+'appRank.php')

export const reqUserRank =(Email) =>ajax(BASE+"appUserRank.php",{Email})

export const reqResiter =(Surname,Firstname,Email,passWord)=>ajax(BASE+'appRegistered.php',{Surname,Firstname,Email,passWord})

export const reqappJourney =() =>ajax(BASE+"appJourney.php")

export const reqAppSetVtype =(Email,Type) =>ajax(BASE+"appSetVtype.php",{Email,Type})

export const reqAchievement =(Email) =>ajax(BASE+"appAchievement.php",{Email})

export const reqEvent=(Email,type,Minute,eventName)=>ajax(BASE+"appUseJourney.php",{Email,type,Minute,eventName})

export const  reqList= (eSearch)=>ajax(BASE+"appEventList.php",{eSearch})

export const reqGarbageData =(Email,RecyclableId,Quality) =>ajax(BASE+"appUseRecyclables.php",{Email,RecyclableId,Quality});

export const reqGarbageDataTest =() =>ajax(BASE+"appRecyclables.php",{});