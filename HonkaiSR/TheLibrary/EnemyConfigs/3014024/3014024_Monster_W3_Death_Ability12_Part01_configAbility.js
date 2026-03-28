const configAbility = {
  "fileName": "3014024_Monster_W3_Death_Ability12_Part01",
  "childAbilityList": [
    "3014024_Monster_W3_Death_Ability12_Part01",
    "3014024_Monster_W3_Death_Ability12_Part02"
  ],
  "skillTrigger": "Skill12",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Watery Dissolution"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
      },
      "searchRandom": true,
      "maxTargets": 2,
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Varying Data",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "targetWrite": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MainLine_Character_1",
          "value": "TargetCharacterID"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2003204085\">Enemy_W3_Death_Mainline_Battle1_CatchID1</a>"
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE, exclude Memosprites)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1275477744\">Modifier_W3_Death_Attack_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
          },
          {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2003204085\">Enemy_W3_Death_Mainline_Battle1_CatchID1</a>"
            }
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Varying Data",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "targetWrite": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MainLine_Character_2",
          "value": "TargetCharacterID"
        }
      ]
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W3_Death_Ability12_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
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