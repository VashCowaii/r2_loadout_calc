const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability03_Part01",
  "childAbilityList": [
    "Feixiao_Feixiao_Ability03_EnterReady",
    "Feixiao_Feixiao_Ability03_Camera",
    "Feixiao_Feixiao_Ability03_Part01",
    "Feixiao_Feixiao_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
  "abilityType": "Ultimate",
  "energy": null,
  "toughnessList": [
    30,
    0,
    0
  ],
  "parse": [
    {
      "name": "Update Character Panel Visibility",
      "show": "CasterOnly",
      "forceDisplayUltButton": true
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Feixiao_Ability03_Part02",
      "isTrigger": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "flagName": "MuteHitFly"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Is Auto-Battle",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Force Team Target-Lock on Target",
          "team": "Player Team",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 99,
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "invertCondition": true
      }
    }
  ],
  "references": []
}