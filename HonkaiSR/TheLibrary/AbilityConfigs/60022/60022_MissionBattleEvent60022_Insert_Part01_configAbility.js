const configAbility = {
  "fileName": "60022_MissionBattleEvent60022_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_TalkNum",
        "compareType": "=",
        "value2": 0
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_TalkNum",
            "compareType": "=",
            "value2": 1
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_TalkNum",
      "value": {
        "operator": "Variables[0] (_TalkNum) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(_TalkNum + 1)",
        "constants": [
          1
        ],
        "variables": [
          "_TalkNum"
        ]
      }
    },
    "Deleted bullshit",
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Consume",
      "consumeFrom": "CurrentHP",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "consumePercent": 0.1,
      "consumeFloor": 1,
      "attackType": "Pursued",
      "DamageType": {
        "name": "Damage Type Source",
        "sourceType": "Physical"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"999661832\">M_MissionBattleEvent60022_AddDamage</a>[<span class=\"descriptionNumberColor\">Blood of \"Strife\"</span>]",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}