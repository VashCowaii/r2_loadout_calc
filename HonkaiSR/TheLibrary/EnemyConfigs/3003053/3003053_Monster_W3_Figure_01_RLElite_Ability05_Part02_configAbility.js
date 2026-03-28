const configAbility = {
  "fileName": "3003053_Monster_W3_Figure_01_RLElite_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1003471107\">Monster_W3_Figure_01_RLElite_ChargeEffect</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "flagName": "STAT_DOT"
      },
      "ignoreParallelWarning": true,
      "ifTargetFound": [
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT",
          "value": {
            "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
            "displayLines": "{[Skill05[0]]}",
            "constants": [],
            "variables": [
              "{[Skill05[0]]}"
            ]
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1916393494\">Monster_W3_Figure_01_RLElite_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"635359514\">Monster_W3_Figure_01_RLElite_DotMark</a>[<span class=\"descriptionNumberColor\">Target Locked On</span>]"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}