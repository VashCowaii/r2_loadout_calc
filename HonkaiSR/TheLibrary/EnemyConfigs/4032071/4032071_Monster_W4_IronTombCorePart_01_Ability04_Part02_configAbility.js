const configAbility = {
  "fileName": "4032071_Monster_W4_IronTombCorePart_01_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Part 1}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]"
        },
        {
          "name": "Detach Parent Mapping Point",
          "point": "Weapon1_00_JNT",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_IsCorePartCharge",
          "value": 1
        }
      ]
    },
    {
      "name": "Skill Points Modification",
      "adjustmentValue": {
        "operator": "Constants[0] (0) || Variables[0] ({[Skill04[0]]}) || SUB || RETURN",
        "displayLines": "(0 - {[Skill04[0]]})",
        "constants": [
          0
        ],
        "variables": [
          "{[Skill04[0]]}"
        ]
      },
      "adjustmentType": "+"
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
          "displayLines": "{[Skill04[1]]}",
          "constants": [],
          "variables": [
            "{[Skill04[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1699523791\">W4_IronTombCore_CalWorldErosion</a>",
      "variables": {
        "_ErosionParam": {
          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
          "displayLines": "{[Skill04[2]]}",
          "constants": [],
          "variables": [
            "{[Skill04[2]]}"
          ]
        }
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_IsCorePartCharge",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>[<span class=\"descriptionNumberColor\">Deliverance of Relief</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_IsCorePartCharge",
          "value": 0
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}