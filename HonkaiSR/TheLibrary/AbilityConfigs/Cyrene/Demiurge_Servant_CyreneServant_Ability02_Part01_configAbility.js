const configAbility = {
  "fileName": "Demiurge_Servant_CyreneServant_Ability02_Part01",
  "childAbilityList": [
    "Demiurge_Servant_CyreneServant_Ability02_Part01",
    "Demiurge_Servant_CyreneServant_Ability02_Part02",
    "Demiurge_Servant_CyreneServant_Ability02_Camera",
    "Demiurge_Servant_CyreneServant_Ability02_Ready",
    "Demiurge_Servant_CyreneServant_Ability02_Ready_Camera",
    "Demiurge_Servant_CyreneServant_Ability02_VisualPrepare"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Memosprite",
  "energy": null,
  "toughnessList": [
    0,
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
      "ability": "Servant_CyreneServant_Ability02_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}