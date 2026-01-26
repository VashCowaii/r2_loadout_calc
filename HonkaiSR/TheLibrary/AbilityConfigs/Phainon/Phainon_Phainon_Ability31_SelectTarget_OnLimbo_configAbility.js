const configAbility = {
  "fileName": "Phainon_Phainon_Ability31_SelectTarget_OnLimbo",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "ADF_MaxHPValue",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Set HP Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "setValue": {
        "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (0.25) || MUL || RETURN",
        "displayLines": "(ADF_MaxHPValue * 0.25)",
        "constants": [],
        "variables": [
          "ADF_MaxHPValue",
          0.25
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "passed": [
        {
          "name": "Inject Ability Use",
          "condition": {
            "name": "Insert Ability Condition",
            "type": "AbilityOwnerInsertUnusedCount",
            "typeValue": 1
          },
          "conditionActive": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Phainon_Ultra[<span class=\"descriptionNumberColor\">Divine Vessel</span>]"
          },
          "abilityName": "Phainon_Ability31_SelectTarget",
          "abilitySource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "priorityTag": "AvatarInsertAttackSelf",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "abortFlags": [
            "STAT_CTRL",
            "DisableAction"
          ],
          "allowAbilityTriggers": false
        }
      ]
    }
  ],
  "references": []
}