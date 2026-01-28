const configAbility = {
  "fileName": "Cyrene_Cyrene_Ability31_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "Cyrene_ExtraSpecialSPReturn",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}.[[getTeamMembers]].[[removeMemosprite]].[[removeUnselectable]].[[living]]"
        },
        "compareType": ">=",
        "value2": 2
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Servant_CyreneServant_Ability02_Ready",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Auto-Battle"
          }
        }
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "ability": "Servant_CyreneServant_Ability01_Ready",
          "isTrigger": true
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}