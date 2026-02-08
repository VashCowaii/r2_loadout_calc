const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability01_Part01",
  "childAbilityList": [
    "Demiurge_Servant_CyreneServant_Ability01_Part01",
    "Demiurge_Servant_CyreneServant_Ability01_Part02",
    "Demiurge_Servant_CyreneServant_Ability01_Camera",
    "Demiurge_Servant_CyreneServant_Ability01_Ready",
    "Demiurge_Servant_CyreneServant_Ability01_Ready_Camera",
    "Demiurge_Servant_CyreneServant_Ability01_VisualPrepare"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Memosprite",
  "energy": null,
  "toughnessList": [
    10,
    0,
    0
  ],
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-348324927\">Cyrene_Preload_ServantReadyEffect</a>",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variables": {
        "_IsPreload": 0
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_HasBeenInVeiwMode",
      "value": 0
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Servant_CyreneServant_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}