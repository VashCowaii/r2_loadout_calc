const configAbility = {
  "fileName": "3024033_BattleEvent_BattleEvent20029_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "MonsterType_W3_Sam_01"
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-781925470\">Enemy_W3_Sam_01_Ability04Target</a>[<span class=\"descriptionNumberColor\">Nemesis</span>]",
      "valuePerStack": {
        "MDF_BreakDamageAddedRatioBase": {
          "operator": "Variables[0] (Ability03_BreakDamageAddedRatioBase) || RETURN",
          "displayLines": "Ability03_BreakDamageAddedRatioBase",
          "constants": [],
          "variables": [
            "Ability03_BreakDamageAddedRatioBase"
          ]
        }
      }
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "set": 0
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}.[[getAttachedSummon]] - {{Ability Target(ST)}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}.[[getMemosprite]]"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Advance/Delay up to Target",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
      },
      "targetRef": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "refPoint": "After",
      "isStartingAV": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1466483299\">Enemy_W3_Sam_01_MuteUltra</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1435923301\">Enemy_W3_Sam_01_Locking</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "MonsterType_W3_Sam_01"
      },
      "ifTargetFound": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W3_Sam_01_Ability04_End_Part01",
          "isTrigger": true
        }
      ]
    },
    "Wait for Pending Ability Completions",
    "Trigger: Ability End"
  ],
  "references": []
}