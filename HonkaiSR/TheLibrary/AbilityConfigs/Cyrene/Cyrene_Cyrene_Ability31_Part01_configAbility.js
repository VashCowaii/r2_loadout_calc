const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability31_Part01",
  "childAbilityList": [
    "Cyrene_Cyrene_Ability31_Camera",
    "Cyrene_Cyrene_Ability31_EnterReady",
    "Cyrene_Cyrene_Ability31_Part01",
    "Cyrene_Cyrene_Ability31_Part02"
  ],
  "skillTrigger": "Skill31",
  "abilityType": "Ultimate",
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
        "target": "{{Caster}}"
      },
      "variables": {
        "_IsPreload": 1
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Cyrene_Ability31_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}