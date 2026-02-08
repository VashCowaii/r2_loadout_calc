const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability03_Part01",
  "childAbilityList": [
    "Cyrene_Cyrene_Ability03_Camera",
    "Cyrene_Cyrene_Ability03_B_Camera",
    "Cyrene_Cyrene_Ability03_Slow_Camera",
    "Cyrene_Cyrene_Ability03_Slow_Camera_Timeline",
    "Cyrene_Cyrene_Ability03_Slow_Camera2_Timeline",
    "Cyrene_Cyrene_Ability03_EnterReady",
    "Cyrene_Cyrene_Ability03_Part01",
    "Cyrene_Cyrene_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Cyrene_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Gender is",
        "gender": "GENDER_MAN"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Auto-Battle"
      },
      "passed": [
        "Deleted bullshit"
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "RingTrigger",
          "value": 0
        },
        "Quick-Time-Event"
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "RingTrigger",
      "value": 1
    },
    "Deleted bullshit"
  ],
  "references": []
}