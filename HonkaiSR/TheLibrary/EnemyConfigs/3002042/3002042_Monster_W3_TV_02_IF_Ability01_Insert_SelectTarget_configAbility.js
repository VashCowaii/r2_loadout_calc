const configAbility = {
  "fileName": "3002042_Monster_W3_TV_02_IF_Ability01_Insert_SelectTarget",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Inject Ability Use",
          "conditionActive": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1974471772\">MModifier_Monster_W3_Theater_IF_Side_Positive</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
              }
            ]
          },
          "checkOverride": {
            "name": "Condition Priority",
            "overridePriority": "MonsterForceKill",
            "condition": {
              "name": "Compare: Ability Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
              "compareType": "<=",
              "value2": 0
            }
          },
          "abilityName": "Monster_W3_TV_02_IF_Ability01_Insert_Part01",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "priorityTag": "MonsterBuffOthers_Elation",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "canHitNonTargets": true,
          "allowAbilityTriggers": false
        }
      ]
    }
  ],
  "references": []
}