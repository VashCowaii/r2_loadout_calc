const configAbility = {
  "fileName": "Sparxie_Sparxie_Ability11_Part01",
  "childAbilityList": [
    "Sparxie_Sparxie_Ability11_Camera",
    "Sparxie_Sparxie_Ability11_Camera_V1",
    "Sparxie_Sparxie_Ability11_Part01",
    "Sparxie_Sparxie_Ability11_Part02"
  ],
  "skillTrigger": "Skill11",
  "abilityType": "Basic ATK",
  "energy": 40,
  "toughnessList": [
    10,
    0,
    5
  ],
  "parse": [
    {
      "name": "Update Character Panel Visibility"
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
          "functionName": "<a class=\"gTempYellow\" id=\"-514028922\">Sparxie_Ability11_Effect_V1</a>"
        },
        "Toggle View Mode"
      ]
    }
  ],
  "references": []
}