const configAbility = {
  "fileName": "1005012_LevelEntity_Colossus_MainBattlePerform_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Player Team All(with Unselectable)V2}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1317377468\">MLevelEntity_Colossus_MainBattlePerform_Listener</a>"
    },
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1755008882\">Enemy_W1_CocoliaP2_Battle3LockHP</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Battle Event ID",
            "ID": 60001,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "ability": "Colossus_Ability03_Pre",
          "isTrigger": true
        }
      ]
    },
    {
      "name": "Use Operation"
    },
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Target has Extra-Turn Queued",
        "target": {
          "name": "Target Name",
          "target": "{{All Unselectable Targets}}"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}