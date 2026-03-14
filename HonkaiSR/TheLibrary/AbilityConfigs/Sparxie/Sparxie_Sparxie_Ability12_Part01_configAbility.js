const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability12_Part01",
  "childAbilityList": [
    "Sparxie_Sparxie_Ability12_Part01"
  ],
  "skillTrigger": "Skill12",
  "abilityType": "Basic ATK",
  "energy": 40,
  "toughnessList": [
    10,
    0,
    5
  ],
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Sparxie_Ability11_Part02",
      "isTrigger": true
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"767923714\">Sparxie_Ability02_Effect</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_PKLineProgress",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_PKLineProgress",
      "value": 0.3
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "STAT_ElationEchoPoint"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "STAT_ElationEchoPoint"
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1607821938\">Sparxie_Ability11_Effect</a>"
        },
        {
          "name": "Update Character Panel Visibility"
        },
        "Toggle View Mode"
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-514028922\">Sparxie_Ability11_Effect_V1</a>"
        },
        "Toggle View Mode"
      ]
    }
  ],
  "references": []
}