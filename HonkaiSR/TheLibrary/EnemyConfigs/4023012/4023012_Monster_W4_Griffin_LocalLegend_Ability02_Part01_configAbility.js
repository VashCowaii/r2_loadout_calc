const configAbility = {
  "fileName": "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
  "childAbilityList": [
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Camera",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Camera02",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02",
    "4023012_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "flagName": "Break",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "failed": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_LocalLegend_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "flagName": "STAT_CTRL",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "flagName": "DisableAction",
            "invertCondition": true
          },
          {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
            },
            "flagName": "Break",
            "invertCondition": true
          }
        ]
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}",
    "targetIsVariable": true
  },
  "references": []
}